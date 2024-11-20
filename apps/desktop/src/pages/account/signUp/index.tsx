import React from 'react';

import { useRouter } from 'next/router';

import { postSignUp } from '#api/controller';
import { SignUpRequest } from '#api/model/fe';

import { PRSignUp } from '#/special';

/**
 * 회원가입
 * 담당자: 조승혁
 */
const signUp = () => {
  const router = useRouter();
  const doSignUp = async (param: SignUpRequest) => {
    try {
      const { result } = await postSignUp(param);
      if (result.isSignUp) {
        router.push('/account/login');
      } else {
        window.$alert.open({
          title: '회원가입 실패',
          Children: (
            <span>
              회원가입에 실패하였습니다.
              <br />
              아이디 및 이메일이 중복 되었습니다.
            </span>
          ),
        });
      }
    } catch (error) {
      window.$alert.open({
        title: '회원가입 실패',
        Children: (
          <span>
            회원가입에 실패하였습니다.
            <br />
            관리자에게 문의 하세요.
          </span>
        ),
      });
    }
  };
  return (
    <>
      <PRSignUp router={router} onClick={doSignUp} />
    </>
  );
};

export default signUp;
