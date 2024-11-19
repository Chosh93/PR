import { accountModel } from '@pr/services';

import { $api } from '#api/handler/axios';
import { desktopApi } from '#api/model';
import { LoginRequest, LoginResponse } from '#api/model/fe';

const api = $api(desktopApi.DefaultApi, desktopApi.Configuration);

export const postLogin = async (loginRequest: LoginRequest) => {
  const data = await api.login(loginRequest);
  return accountModel.parseLogin(data as LoginResponse);
};
