import { View } from "@tarojs/components";
import { memo, useState } from "react";
import Drvider from "@/components/Common/Drvider/Drvider";
import { Icon } from "@antmjs/vantui";

import "./styles/index.scss";
import Tag from "@/components/Common/Tag/Tag";

interface TypeBarPropsInf {
  onChange?: (_type: string, _data?: unknown) => void;
}

function TypeBar(props: TypeBarPropsInf) {
  const { onChange } = props;
  const [showModal, setShowModal] = useState(false);
  const [typeList] = useState([
    {
      text: "最热门",
      number: 15
    },
    {
      text: "最热门",
      number: 15
    },
    {
      text: "最热门",
      number: 15
    },
    {
      text: "最热门",
      number: 15
    },
    {
      text: "最热门",
      number: 15
    },
    {
      text: "最热门",
      number: 15
    },
    {
      text: "最热门",
      number: 15
    }
  ]);

  function onClick() {
    setShowModal(!showModal);

    return onChange ? onChange("scroll", showModal) : null;
  }

  return (
    <View className=" h-72px " style={{ position: "relative", transform: "rotate(360deg)" }}>
      <View className="px-32px flex h-72px leading-72px items-center workplace-typebar">
        <View className=" overflow-scroll  ">
          <View className="flex items-center px-4px mr-48px text-textActive text-center active">
            <Icon classPrefix="icon" name="Popular" className="mr-8px" />
            <View>最热门</View>
          </View>
          {typeList.map((item) => {
            return (
              <View className="px-4px mr-48px text-textActive text-center">
                {item.text + "(" + item.number + ")"}
              </View>
            );
          })}
        </View>

        <Drvider isVertical={false} height={24} className="mx-18px"></Drvider>

        <View className="w-72px shrink-0" style={{ flexShrink: 0 }} onClick={onClick}>
          类别
        </View>
      </View>
      {showModal ? (
        <View className="workplace-type-cover">
          <View className="workplace-type-cover-content">
            <Tag>
              <View>文字文字</View>
            </Tag>
            <Tag>
              <View>文字文字</View>
            </Tag>
            <Tag>
              <View>文字文字</View>
            </Tag>
            <Tag>
              <View>文字文字</View>
            </Tag>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default memo(TypeBar);
