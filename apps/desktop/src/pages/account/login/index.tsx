import React from 'react';

import { useRouter } from 'next/router';

import { PRLogin } from '@pr/ui';

/**
 * 로그인
 * 담당자: 조승혁
 */
const Login = () => {
  const router = useRouter();
  console.log('123');
  const loginClick = () => {
    // TODO: 실제 api 호출 대체
    // 임시 로그인 처리
    const loginResponse = {
      success: true,
      user: {
        id: 1,
        name: '홍길동',
      },
    };
    if (loginResponse.success) {
      router.push('/');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <>
      <PRLogin router={router} onClick={loginClick} />
    </>
  );
};

export default Login;
