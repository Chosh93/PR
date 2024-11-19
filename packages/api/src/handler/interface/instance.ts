import { AxiosInstance, AxiosInterceptorManager, AxiosResponse, CustomAxiosRequestConfig } from 'axios';
import { ICustomResponse } from './response';

// axsios custom instance
export interface ICustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<CustomAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<ICustomResponse<any>, CustomAxiosRequestConfig>>;
  };
  getUri(config?: CustomAxiosRequestConfig): string;
  request<T = any, R = ICustomResponse<T>, D = any>(config: CustomAxiosRequestConfig<D>): Promise<R>;
  get<T = any, R = ICustomResponse<T>, D = any>(url: string, config?: CustomAxiosRequestConfig<D>): Promise<R>;
  delete<T = any, R = ICustomResponse<T>, D = any>(url: string, config?: CustomAxiosRequestConfig<D>): Promise<R>;
  head<T = any, R = ICustomResponse<T>, D = any>(url: string, config?: CustomAxiosRequestConfig<D>): Promise<R>;
  options<T = any, R = ICustomResponse<T>, D = any>(url: string, config?: CustomAxiosRequestConfig<D>): Promise<R>;
  post<T = any, R = ICustomResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: CustomAxiosRequestConfig<D>,
  ): Promise<R>;
  put<T = any, R = ICustomResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: CustomAxiosRequestConfig<D>,
  ): Promise<R>;
  patch<T = any, R = ICustomResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: CustomAxiosRequestConfig<D>,
  ): Promise<R>;
}
