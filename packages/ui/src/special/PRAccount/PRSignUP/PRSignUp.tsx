import { NextRouter } from 'next/router';

import { Box, Divider, Paper, Text } from '@mantine/core';

import { useAccountForm } from '#services/hooks';

import { PRButton, PRInput } from '#/common';

export interface PRSignUpProps {
  router: NextRouter;
  onClick: (value?: any) => void;
}

export const PRSignUp = ({ router, onClick }: PRSignUpProps) => {
  const { signUpForm } = useAccountForm();
  const onSignUp = () => {
    onClick(signUpForm.values);
  };
  return (
    <Paper>
      <Text>회원가입</Text>
      <Divider labelPosition="center" />
      <Box>
        <Box>
          <PRInput
            type="normal"
            label="ID"
            placeholder="아이디를 입력해 주세요."
            onChange={(value) => signUpForm.setFieldValue('userId', String(value))}
          />
          <PRInput
            type="password"
            label="Password"
            placeholder="패스워드를 입력해 주세요."
            onChange={(value) => signUpForm.setFieldValue('userPw', String(value))}
          />
          <PRInput
            type="normal"
            label="Name"
            placeholder="이름을 입력해 주세요."
            onChange={(value) => signUpForm.setFieldValue('userName', String(value))}
          />
          <PRInput
            type="normal"
            label="Email"
            placeholder="이메일을 입력해 주세요."
            onChange={(value) => signUpForm.setFieldValue('userEmail', String(value))}
          />
          <PRInput
            type="normal"
            label="Phone Number"
            placeholder="휴대폰번호를 입력해 주세요."
            onChange={(value) => signUpForm.setFieldValue('userPhone', String(value))}
          />
        </Box>
      </Box>
      <PRButton label="로그인" onClick={() => router.push('/account/login')} />
      <PRButton label="회원가입" onClick={onSignUp} />
    </Paper>
  );
};
