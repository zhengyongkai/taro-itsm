export default {
  prefixer: false,
  extract: {
    // 忽略部分文件夹
    exclude: ["node_modules", ".git", "dist"]
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false
  },
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#4D59E8",
        primaryDark: "#3743C9",
        "primary-s": "#2869FF",
        textMain: "#17181A",
        textActive: "#585C69",
        gray: "#D9D9D9",
        bgGray: "#f6f9ff",
        red: "",
        pink: ""
      }
    }
  },
  enableRpx: true
};
