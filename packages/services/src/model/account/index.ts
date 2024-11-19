import { LoginResponse } from '#api/model/fe';

import { PRLoginResponseProps } from '#/index';

export const accountModel = {
  parseLogin(data: LoginResponse) {
    console.log(data);
    const result = {
      isLogin: data.success,
      messages: data.message,
    } as PRLoginResponseProps;
    return {
      result,
    };
  },
};
