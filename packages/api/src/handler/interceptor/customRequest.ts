import { CustomAxiosRequestConfig } from 'axios';


export const customRequest = async (config: CustomAxiosRequestConfig) => {
  // BASE_URL 설정
  if (config?.useBaseURL) {
    // TODO: FE , Backoffice url 분기처리
  }

  // 파일 업로드 multipart/form-data 사용 여부 (Content-Type 설정)
  if (config?.useMultipart) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
};
