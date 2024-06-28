import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import '@/components';
import './app.scss';

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched1.');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
