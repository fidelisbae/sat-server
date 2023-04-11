export interface BaseResponse<T = any> {
  result: boolean;
  message: string;
  data?: T | T[];
}

export interface ListResponse<T = any> extends BaseResponse<T> {
  result: boolean;
  message: string;
  count: number;
  data: T[];
}
