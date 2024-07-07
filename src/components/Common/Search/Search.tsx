import { memo } from "react";
import { View } from "@tarojs/components";

import "./styles/index.scss";

function SearchBar() {
  return (
    <>
      <View className="h-112px px-32px bg-white py-24px border-box search-bar">
        <View className="h-64px bg-tag-bg px-16px">dasd</View>
      </View>
    </>
  );
}

export default memo(SearchBar);
