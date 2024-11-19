import { AxiosResponse } from 'axios';

export const customResponse = async (response: AxiosResponse) => {
  try {
    /** FE */
    return response.data;
  } catch (e) {
    // console.log('공통 에러 부분', e);
  }
};
