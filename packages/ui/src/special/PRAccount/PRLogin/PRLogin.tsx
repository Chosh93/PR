import { NextRouter } from 'next/router';

import { Box, Divider, Paper, Text } from '@mantine/core';

import { useAccountForm } from '#services/hooks';

import { PRButton, PRInput } from '#/common';

export interface PRLoginInputProps {
  router: NextRouter;
  onClick: (value?: any) => void;
}

export const PRLogin = ({ router, onClick }: PRLoginInputProps) => {
  const { loginForm } = useAccountForm();

  const onLogin = () => {
    onClick(loginForm.values); // 검증된 폼 데이터로 로그인 요청
  };

  return (
    <>
      <Paper shadow="md" radius="lg">
        <Text size="lg" fw={500}>
          Welcome to PR
        </Text>
        <Divider labelPosition="center" my="lg" />
        <Box>
          <PRInput
            type="normal"
            label="ID"
            placeholder="아이디를 입력해 주세요."
            onChange={(value) => loginForm.setFieldValue('userId', value as string)}
          />
          <PRInput
            type="password"
            label="Password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={(value) => loginForm.setFieldValue('userPw', String(value))}
          />
          <PRButton label="로그인" onClick={onLogin} />
          <PRButton label="회원가입" onClick={() => router.push('/account/signUp')} />
        </Box>
      </Paper>
    </>
  );
};
