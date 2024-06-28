import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';
import CustomTabbar from '../components/Layout';

export default function ShoppingCart() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="shoppingCart">
      <Text>Hello world! shoppingCart</Text>
      <CustomTabbar active={2}></CustomTabbar>
    </View>
  );
}
