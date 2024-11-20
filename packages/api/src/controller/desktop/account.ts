import { accountModel } from '@pr/services';

import { $api } from '#api/handler/axios';
import { desktopApi } from '#api/model';
import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from '#api/model/fe';

const api = $api(desktopApi.DefaultApi, desktopApi.Configuration);

export const postLogin = async (loginRequest: LoginRequest) => {
  const data = await api.login(loginRequest);
  return accountModel.parseLogin(data as LoginResponse);
};

export const postSignUp = async (signUpRequest: SignUpRequest) => {
  const data = await api.signUp(signUpRequest);
  return accountModel.parseSignUp(data as SignUpResponse);
};
