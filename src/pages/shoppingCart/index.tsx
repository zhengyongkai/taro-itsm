import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function ShoppingCart() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='shoppingCart'>
      <Text>Hello world!</Text>
    </View>
  )
}
