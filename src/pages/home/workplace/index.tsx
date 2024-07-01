import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Tabbar from "@/components/Layout/Tabbar";
import "./index.scss";
import UserCard from "./components/UserCard/UserCard";
import Notice from "./components/Notice/Notice";

export default function HomeApply() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="home/apply">
      <View className="mx-32px mb-15px">
        <UserCard></UserCard>
      </View>
      <View className="mx-32px ">
        <Notice></Notice>
      </View>
      <Tabbar active={0}></Tabbar>
    </View>
  );
}
