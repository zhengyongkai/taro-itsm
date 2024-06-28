export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/classification/index',
    'pages/shoppingCart/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    // color: '#000000',
    // selectedColor: 'red',
    // backgroundColor: '#000000',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index'
      },
      {
        text: '分类',
        pagePath: 'pages/classification/index'
      },
      {
        text: '购物车',
        pagePath: 'pages/shoppingCart/index'
      },
      {
        text: '我的',
        pagePath: 'pages/user/index'
      }
    ]
  }
});
