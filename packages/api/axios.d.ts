import { InternalAxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface CustomAxiosRequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
    useDefaultHeader?: boolean;
    useLoading?: boolean;
    useModal?: boolean;
    useMultipart?: boolean;
    useBaseURL?: boolean;
    // useReIssue?: boolean; 토큰 방식일 경우 사용
  }
}
