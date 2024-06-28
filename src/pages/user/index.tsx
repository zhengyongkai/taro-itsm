import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { Button } from '@antmjs/vantui';
import CustomTabbar from '../components/Layout';

export default function User() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View>
      <Text>Hello world! user</Text>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
      <CustomTabbar active={3}></CustomTabbar>
    </View>
  );
}
