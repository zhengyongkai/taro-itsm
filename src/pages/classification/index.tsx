import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';
import CustomTabbar from '../components/Layout';

export default function Classification() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="classification">
      <Text>Hello world! classification</Text>
      <CustomTabbar active={1}></CustomTabbar>
    </View>
  );
}
