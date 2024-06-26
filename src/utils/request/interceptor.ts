import Taro from '@tarojs/taro';
import { getStorage, setStorage } from '../common/storage';

const autoIntercepor = async function (chain) {
  const requestParams = chain.requestParams;
  //   const { method, data, url, header } = requestParams;
  requestParams.header = {
    Authorization: getStorage('lll')
  };
  return chain.proceed(requestParams).then((res) => {
    const { statusCode } = res;
    switch (statusCode) {
      case 200:
        return Promise.resolve(res);
    }
    // switch(res)
    return res;
  });
};

export { autoIntercepor };
