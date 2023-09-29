import GemGamesLogo from "ui/logo/gemgames";
export default {
  logo: <GemGamesLogo height="36" />,
  project: {
    link: 'https://github.com/yitproject/gem'
  },
  search: {
    placeholder: "在此处搜索",
    emptyResult: "没有任何内容"
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '明亮',
        dark: '黑暗',
        system: '系统'
      };
    }
  },
  sidebar: { toggleButton: true },
  footer: {
    text: (
      <span>
        BSD 2-Clause License - ©{new Date().getFullYear()} GemGames Development Team.
      </span>
    )
  }
};