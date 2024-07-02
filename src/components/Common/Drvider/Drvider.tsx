import { Divider } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import React, { memo } from "react";

import "./styles/index.scss";

interface DividerInf {
  isVertical?: boolean;
  dashed?: boolean;
  hairline?: boolean;
  contentPosition?: "left" | "center" | "right" | undefined;
  fontSize?: string | undefined;
  borderColor?: string | undefined;
  textColor?: string | undefined;
  children?: React.ReactNode;
  className?: string | undefined;
  height?: number | undefined;
}

function CustomDivider(props: DividerInf) {
  const {
    children,
    isVertical = true,
    dashed,
    hairline,
    contentPosition,
    fontSize,
    borderColor = "#D9D9D9",
    textColor,
    className = "",
    height = 32
  } = props;
  return (
    <>
      {isVertical ? (
        <>
          <Divider
            dashed={dashed}
            hairline={hairline}
            borderColor={borderColor}
            textColor={textColor}
            fontSize={fontSize}
            contentPosition={contentPosition}>
            {children}
          </Divider>
        </>
      ) : (
        <>
          <View
            style={{ borderColor: borderColor, height: height }}
            className={`${className} itsm-drvider`}>
            {children}
          </View>
        </>
      )}
    </>
  );
}

export default memo(CustomDivider);
