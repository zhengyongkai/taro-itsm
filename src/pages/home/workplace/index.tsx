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
import Search from "@/components/Common/Search/Search";
import { scrollTo } from "@/utils/common/scroll";

export default function HomeApply() {
  // const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [isToolBarFix, setToolBarFix] = useState<boolean>(false);
  const [isCatchMove, setCatchMove] = useState<boolean>(false);
  const [tag, setTag] = useState([1, 23, 4, 5, 6, 7, 8, , 9, 10]);

  useLoad(() => {});

  function onscroll(e) {
    setToolBarFix(e.detail.isFixed);
  }

  function scrollToFilter(isMove) {
    setCatchMove(!isMove);
    if (!isToolBarFix) {
      scrollTo(".workplace-toolbar-content");
    }
  }

  function TagList() {}

  return (
    <>
      <View>
        <Search></Search>
      </View>
      <View className="page" catch-move={isCatchMove}>
        <View className="px-32px mb-15px pt-142px">
          <UserCard></UserCard>
        </View>
        <View className="px-32px mb-36px">
          <Notice></Notice>
        </View>

        <Sticky
          onScroll={onscroll}
          offsetTop={56}
          className={` workplace-toolbar-content   ${isToolBarFix ? "bg-white" : "bg-bgGray"}`}>
          <View>
            <View className="px-32px ">
              <ToolBar></ToolBar>
            </View>
            <View className="mt-24px mb-28px">
              <Drvider></Drvider>
            </View>
            <View>
              <TypeBar
                onChange={(_e, isMove: string) => {
                  console.log(_e);
                  if (_e === "scroll") {
                    console.log(_e);
                    scrollToFilter(isMove);
                  } else {
                    TagList();
                  }
                }}></TypeBar>
            </View>
          </View>
        </Sticky>

        <View
          style={{ height: isCatchMove ? 600 : 800, overflow: isToolBarFix ? "scroll" : "hidden" }}>
          <DataPanel></DataPanel>
        </View>
        <Tabbar active={0}></Tabbar>
      </View>
    </>
  );
}
