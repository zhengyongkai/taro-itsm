import React, { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import { Provider } from "react-redux";

import "windi.css";
import "@/assets/svg/style.css";
import "./app.scss";
import { store } from "./store";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched1.");
  });

  // children 是将要会渲染的页面
  return <Provider store={store}>{children}</Provider>;
}

export default App;
