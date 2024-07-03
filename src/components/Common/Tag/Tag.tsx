import React, { memo } from "react";
import { View } from "@tarojs/components";

import "./styles/index.scss";

interface TagInf {
  children: React.ReactNode;
  active?: boolean;
}

function Tag(props: TagInf) {
  const { children, active = false } = props;
  return (
    <View
      className={`h-64px text-center round-4  text-primary-s bg-tag-bg min-w-160px leading-64px text-14 font-400 inline-block px-24px py-12px ${active ? "tag-active" : ""}`}>
      {children}
    </View>
  );
}

export default memo(Tag);
