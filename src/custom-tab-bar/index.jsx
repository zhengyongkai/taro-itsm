import { Icon, Tabbar, TabbarItem } from '@antmjs/vantui';
import Taro from '@tarojs/taro';
import React, { useEffect, useRef, useState } from 'react';

export default function CustomTabbar() {
  const [tabData, setTabData] = useState({
    list: [
      {
        id: 0,
        icon: 'home-o',
        text: '首页',
        url: 'pages/index/index'
      },
      {
        id: 1,
        icon: 'qr',
        text: '分类',
        url: 'pages/classification/index'
      },
      {
        id: 2,
        icon: 'shopping-cart-o',
        text: '购物车',
        url: 'pages/shoppingCart/index'
      },
      {
        id: 3,
        icon: 'manager-o',
        text: '我的',
        url: 'pages/user/index'
      }
    ]
  });
  const onChange = (e) => {
    if (e.detail == 0) {
      Taro.switchTab({
        url: '/pages/index/index'
      });
    } else if (e.detail == 1) {
      Taro.switchTab({
        url: '/pages/classification/index'
      });
    } else if (e.detail == 2) {
      Taro.switchTab({
        url: '/pages/shoppingCart/index'
      });
    } else if (e.detail == 3) {
      Taro.switchTab({
        url: '/pages/user/index'
      });
    }
  };

  return (
    <Tabbar active={1} onChange={onChange}>
      {tabData.list.map((Item) => {
        return (
          <TabbarItem key={Item.id}>
            {' '}
            <Icon name="chat-o" size="32px" className="icon"></Icon>
            {Item.text}3123123
          </TabbarItem>
        );
      })}
    </Tabbar>
  );
}
