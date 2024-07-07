import { Icon, Tabbar, TabbarItem } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import { memo, useMemo, useState } from "react";
// import '@antmjs/vantui/lib/icon/index.css';

interface CustomTabbarPropsInf {
  active: number;
}

export interface tabbarListInf {
  id: number;
  icon: string;
  text: string;
  url: string;
  dot?: boolean;
  info?: number;
}

function CustomTabbar(props: CustomTabbarPropsInf) {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);
  const [active, setActive] = useState(props.active || 0);
  const [tabData] = useState<{ list: tabbarListInf[] }>({
    list: [
      {
        id: 0,
        icon: "Grid",
        text: "工作台",
        url: "pages/home/workplace/index"
      },
      {
        id: 1,
        icon: "ReportFill",
        text: "全部表单",
        url: "pages/home/formitem/index"
      },
      {
        id: 2,
        icon: "Clock",
        text: "申请记录",
        url: "pages/home/apply/index",
        dot: true
      },
      {
        id: 3,
        icon: "Symbol",
        text: "消息",
        url: "pages/home/message/index",
        info: 99
      }
    ]
  });

  useDidShow(() => {
    //@ts-ignore
    const url: string = page?.route;
    let key = tabData.list.filter((item) => item.url === url)[0];
    console.log(url, key);
    setActive(key!.id);
  });

  const onChange = (e) => {
    setActive(e.detail);
    if (e.detail == 0) {
      Taro.switchTab({
        url: "/pages/home/workplace/index"
      });
    } else if (e.detail == 1) {
      Taro.switchTab({
        url: "/pages/home/formitem/index"
      });
    } else if (e.detail == 2) {
      Taro.switchTab({
        url: "/pages/home/apply/index"
      });
    } else if (e.detail == 3) {
      Taro.switchTab({
        url: "/pages/home/message/index"
      });
    }
  };

  return (
    <Tabbar active={active} onChange={onChange}>
      {tabData.list.map((Item) => {
        return (
          <>
            <TabbarItem
              iconPrefix="icon"
              icon={Item.icon}
              key={Item.id}
              dot={Item.dot}
              info={Item.info}>
              <View>
                <View>{Item.text}</View>
              </View>
            </TabbarItem>
          </>
        );
      })}
    </Tabbar>
  );
}

export default memo(CustomTabbar);
