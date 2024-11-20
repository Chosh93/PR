import React from 'react';

import { useRouter } from 'next/router';

import { postLogin } from '@pr/api';
import { PRLogin } from '@pr/ui';

import { LoginRequest } from '#api/model/fe';

/**
 * 로그인
 * 담당자: 조승혁
 */
const Login = () => {
  const router = useRouter();
  const doLogin = async (param: LoginRequest) => {
    if (param.userId && param.userPw) {
      try {
        const { result } = await postLogin(param);
        if (result.isLogin) {
          router.push('/');
        } else {
          window.$alert.open({
            title: '로그인 실패',
            children: (
              <span>
                로그인에 실패하였습니다.
                <br />
                아이디 / 패스워드를 확인하세요.
              </span>
            ),
          });
        }
      } catch (error) {
        window.$alert.open({
          title: '로그인 실패',
          children: (
            <span>
              로그인에 실패하였습니다.
              <br />
              아이디 / 패스워드를 확인하세요.
            </span>
          ),
        });
      }
    }
  };

  return (
    <>
      <PRLogin router={router} onClick={doLogin} />
    </>
  );
};

export default Login;
