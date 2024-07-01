import { Icon } from "@antmjs/vantui";
import { View } from "@tarojs/components";

export default function Notice() {
  return (
    <>
      <View className="h-100px px-24px font-700 flex items-center bg-white rounded-8px">
        <View className="mr-14px">
          <Icon classPrefix="icon" name="notice"></Icon>
        </View>
        <View className="text-textActive flex-1 truncate mr-48px">
          富士康技术集富士康技术集团全新战略布局公团全新战略布局公...
        </View>
        <View className="text-primary-s ">前往查看</View>
      </View>
    </>
  );
}
