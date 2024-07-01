import { useDispatch, useSelector } from "react-redux";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Tabbar from "@/components/Layout/Tabbar";
import "./index.scss";
import UserCard from "./components/UserCard/UserCard";
import Notice from "./components/Notice/Notice";
import ToolBar from "./components/ToolBar/ToolBar";
import { DropdownItem, DropdownMenu, Sticky } from "@antmjs/vantui";
import { useState } from "react";

export default function HomeApply() {
  // const dispatch = useDispatch();

  const [isToolBarFix, setToolBarFix] = useState<boolean>(false);

  useLoad(() => {
    console.log("Page loaded.");
  });

  function onscroll(e) {
    setToolBarFix(e.detail.isFixed);
  }

  return (
    <View className="home/apply">
      <View className="px-32px mb-15px">
        <UserCard></UserCard>
      </View>
      <View className="px-32px mb-36px">
        <Notice></Notice>
      </View>
      <Sticky
        onScroll={onscroll}
        offsetTop={0}
        className={` workplace-toolbar-content   ${isToolBarFix ? "bg-white" : "bg-bgGray"}`}>
        <ToolBar></ToolBar>
        <ToolBar></ToolBar>
      </Sticky>
      <View className="h-5000px"></View>
      <Tabbar active={0}></Tabbar>
    </View>
  );
}
