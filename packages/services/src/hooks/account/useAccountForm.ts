import { matches, useForm } from '@mantine/form';

import { korPattern, passwordPattern } from '#services/utils';

import { PRLoginForm } from '#/special';

export const useAccountForm = () => {
  const form = useForm({
    initialValues: {
      userId: '',
      userPw: '',
    } as PRLoginForm,
    validate: {
      userId: matches(korPattern, '이름을 입력해 주세요.'),
      userPw: matches(passwordPattern, '패스워드를 입력해 주세요.'),
    },
  });

  return {
    form,
  };
};
