import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Tabbar from "@/components/Layout/Tabbar";
import "./index.scss";

export default function HomeApply() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="home/apply">
      <View className="sign-tab">
        <View>dasd</View>
      </View>
      <Text>Message</Text>
      <Tabbar active={3}></Tabbar>
    </View>
  );
}
