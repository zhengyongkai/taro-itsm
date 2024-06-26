import Taro, { RequestTask } from '@tarojs/taro';
import { autoIntercepor } from './interceptor';
import { Method } from '@/types/request';

Taro.addInterceptor(autoIntercepor);

type MethodInf = keyof Method | undefined;

function request<T, U>(url: string, method: MethodInf = 'GET', data: T) {
  console.log(method);
  return Taro.request<U>({
    url,
    method,
    data
  });
}

export { request };
