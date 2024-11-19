import axios, { AxiosError, AxiosInstance, CustomAxiosRequestConfig } from 'axios';

import { customError, customRequest, customResponse } from './interceptor';
import { ICustomInstance, IErrorResponse } from './interface';

const setHeader = (token?: string) => ({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${token}`,
  },
});

export const list = async <T>(url: string): Promise<any> => {
  const rs = await axios.get(url, { ...setHeader() });
  return rs.data;
};

export const post = async <T>(url: string, params: T): Promise<any> => {
  const rs = await axios.post(url, params, { ...setHeader() });
  return rs.data;
};

export const put = async <T>(url: string, params: T): Promise<any> => {
  const rs = await axios.put(url, params, { ...setHeader() });
  return rs.data;
};

export const del = async (url: string, uid: string): Promise<any> => {
  const rs = await axios.delete(url, { ...setHeader(), data: { uid } });
  return rs.data;
};

const headers: any = {
  'Content-Type': 'application/json',
  crossDomain: true,
  withCredentials: true,
};

const config: CustomAxiosRequestConfig = {
  headers,
  timeout: 0,
  useDefaultHeader: true,
  useLoading: true,
  useModal: true,
  useMultipart: false,
  baseURL: process.env.PUBLIC_API_URL, // 로컬로 붙기 위한 용도
};

const customInstance = (config: CustomAxiosRequestConfig): AxiosInstance => {
  const instance: AxiosInstance = axios.create(config);

  instance.interceptors.request.use(customRequest, async (error: AxiosError<IErrorResponse>) => {
    return customError(error, instance);
  });

  instance.interceptors.response.use(customResponse, async (error: AxiosError<IErrorResponse>) => {
    return customError(error, instance);
  });

  return instance;
};

export const $api = <T, T2>(
  controller: new (configuration: any, basePath: any, axios: AxiosInstance) => T,
  configuration: new (param: any) => T2,
): T => {
  const _param = new configuration({
    basePath: process.env.PUBLIC_API_URL,
  });

  return new controller(_param, undefined, customInstance(config));
};

export const $http: ICustomInstance = (function () {
  return customInstance(config);
})();
