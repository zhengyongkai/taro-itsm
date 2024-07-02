import { View } from "@tarojs/components";
import { memo } from "react";
import Drvider from "@/components/Common/Drvider/Drvider";

import "./styles/index.scss";

function ToolBar() {
  return (
    <View className="h-64px font-700 text-32px leading-48px flex items-center workplace-toolbar text-center">
      <View className="w-160px h-64px active leading-64px">热门申请</View>
      <Drvider height={16} isVertical={false}></Drvider>
      <View className="w-160px h-64px leading-64px">主题推荐</View>
      <Drvider height={16} isVertical={false}></Drvider>
      <View className="w-160px h-64px leading-64px">再次提交</View>
    </View>
  );
}

export default memo(ToolBar);
