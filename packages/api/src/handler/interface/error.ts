// axsios Reject instance
export interface IErrorResponse {
  //! NEW
  respCode?: string;
  successYn?: string;
  respDetail?: string;
  respMsg?: string;
  //! jing9 레거시
  status?: number;
  timestamp?: Date;
  errorResponse?: {
    errorCode?: string;
    message?: string;
  };
}
