// import { Image } from "@antmjs/vantui";
import { View, Image } from "@tarojs/components";
import Avatar from "@/assets/img/avatar.png";

import "./styles/index.scss";

export default function UserCard() {
  return (
    <>
      <View className="rounded-16px overflow-hidden">
        <View className="flex  bg-primary items-center px-30px py-48px ">
          <View>
            <Image src={Avatar} className="w-88px h-88px mr-24px "></Image>
          </View>
          <View>
            <View className="text-white text-32px font-700 leading-48px">你好 王大明</View>
            <View className="text-white text-24px font-400 leading-36px">中央资讯|中央资讯</View>
          </View>
        </View>
        <View className="bg-primaryDark flex h-96px  items-center sign-tab">
          <View className="text-white font-400 leading-48px h-48px text-28px flex-1 text-center">
            待签核 2
          </View>
          <View className="text-white font-400 leading-48px h-48px text-28px flex-1 text-center">
            已退回 3
          </View>
          <View className="text-white font-400 leading-48px h-48px text-28px flex-1 text-center">
            草稿 0
          </View>
        </View>
      </View>
    </>
  );
}
