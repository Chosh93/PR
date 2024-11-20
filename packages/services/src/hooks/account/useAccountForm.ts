import { useForm } from '@mantine/form';

import { PRLoginForm } from '#/special';

export const useAccountForm = () => {
  const loginForm = useForm({
    initialValues: {
      userId: '',
      userPw: '',
    } as PRLoginForm,
  });

  const signUpForm = useForm({
    initialValues: {
      userId: '',
      userPw: '',
      userName: '',
      userEmail: '',
      userPhone: '',
    },
  });

  return {
    loginForm,
    signUpForm,
  };
};
