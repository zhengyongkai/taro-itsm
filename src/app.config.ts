export default defineAppConfig({
  pages: [
    "pages/home/workplace/index",
    "pages/home/apply/index",
    "pages/home/formitem/index",
    "pages/home/message/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    custom: true,
    // color: '#000000',
    // selectedColor: 'red',
    // backgroundColor: '#000000',
    list: [
      {
        text: "首页",
        pagePath: "pages/home/apply/index"
      },
      {
        text: "分类",
        pagePath: "pages/home/formitem/index"
      },
      {
        text: "购物车",
        pagePath: "pages/home/message/index"
      },
      {
        text: "我的",
        pagePath: "pages/home/workplace/index"
      }
    ]
  }
});
