import { AxiosError, AxiosInstance } from 'axios';


import { IErrorResponse } from '../interface';

export const customError = async (error: AxiosError<IErrorResponse>, instance: AxiosInstance) => {
  // const { useLoading } = (error?.config || {}) as CustomAxiosRequestConfig;

  // TODO: 예외처리 부분
  if (error.code === 'timeout') return Promise.reject(error);
  if (!error.response) return Promise.reject(error);

  const { data } = error.response;
  const { respCode } = data;

  if (respCode === '001') {
    // TODO: 공통 에러 처리 부분
  }

  return Promise.reject(error);
};
