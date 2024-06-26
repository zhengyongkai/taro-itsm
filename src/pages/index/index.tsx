import { View, Swiper, SwiperItem } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { request } from '@/utils/request/request';

import './index.scss';

export default function Index() {
  useLoad(async () => {
    console.log('Page loaded.');
    let rows = await request<{}, { rows: number[] }>(
      'http://10.51.48.93:8011/itsm/uat/api/system/notice/list?pageSize=0',
      'POST',
      {}
    );
    console.log(rows.data.rows);
  });

  return (
    <View>
      <Swiper
        className="test-h"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className="demo-text-1">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">3</View>
        </SwiperItem>
      </Swiper>
    </View>
  );
}
