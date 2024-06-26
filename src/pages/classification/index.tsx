import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Classification() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='classification'>
      <Text>Hello world!</Text>
    </View>
  )
}
