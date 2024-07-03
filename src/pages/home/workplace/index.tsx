import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DropdownItem, DropdownMenu, Sticky, Divider } from "@antmjs/vantui";
import { ScrollView, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import Tabbar from "@/components/Layout/Tabbar";

import UserCard from "./components/UserCard/UserCard";
import Notice from "./components/Notice/Notice";
import ToolBar from "./components/ToolBar/ToolBar";

import "./index.scss";
import TypeBar from "./components/TypeBar/TypeBar";
import Drvider from "@/components/Common/Drvider/Drvider";
import DataPanel from "./components/DataPanel/DataPanel";

export default function HomeApply() {
  // const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [isToolBarFix, setToolBarFix] = useState<boolean>(false);
  const [isCatchMove, setCatchMove] = useState<boolean>(false);

  useLoad(() => {
    // console.log("Page loaded.");
  });

  function onscroll(e) {
    // console.log(e.detail);
    setToolBarFix(e.detail.isFixed);
  }

  function scrollToFilter(isMove) {
    setCatchMove(!isMove);
    Taro.pageScrollTo({
      selector: ".workplace-toolbar-content"
    });
  }

  return (
    <View className="page" catch-move={isCatchMove}>
      {isCatchMove}
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
        <View>
          <View className="px-32px ">
            <ToolBar></ToolBar>
          </View>

          <View className="mt-24px mb-28px">
            <Drvider></Drvider>
          </View>
          <View>
            <TypeBar onChange={(_e, isMove: string) => scrollToFilter(isMove)}></TypeBar>
          </View>
        </View>
      </Sticky>

      <View className="h-5000px">
        <DataPanel></DataPanel>
      </View>
      <Tabbar active={0}></Tabbar>
    </View>
  );
}
