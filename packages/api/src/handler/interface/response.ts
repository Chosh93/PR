// axsios Response Interface
export interface ICustomResponse<T> {
  responseTime: number;
  error?: {
    description?: string;
  };
  data: T | { code: string; message: string };
}
