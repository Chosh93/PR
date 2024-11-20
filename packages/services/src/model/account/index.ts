import { LoginResponse, SignUpResponse } from '#api/model/fe';

import { PRLoginResponseProps, PRSignUpResponseProps } from '#/index';

export const accountModel = {
  parseLogin(data: LoginResponse) {
    const result = {
      isLogin: data.success,
      messages: data.message,
    } as PRLoginResponseProps;
    return {
      result,
    };
  },

  parseSignUp(data: SignUpResponse) {
    const result = {
      isSignUp: data.success,
      messages: data.message,
    } as PRSignUpResponseProps;
    return {
      result,
    };
  },
};
