import Taro from "@tarojs/taro";

export function scrollTo(className: string) {
  Taro.pageScrollTo({
    selector: className
  });
}
