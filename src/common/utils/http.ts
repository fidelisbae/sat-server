import { STATUS_PHRASE } from '../constants/http-phrase';

export const getResponsePhrase = (code: number) => {
  return STATUS_PHRASE[code as keyof typeof STATUS_PHRASE];
};
