import Taro from '@tarojs/taro';

enum Prefix {
  key = 'Taro_'
}

export function getStorage(key: string) {
  const value = JSON.parse(Taro.getStorageSync(Prefix.key + key) || '{}');
  return value;
}

export function setStorage(key: string, value: unknown) {
  return Taro.setStorageSync(key, value);
}
