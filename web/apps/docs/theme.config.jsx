import GemGamesLogo from "ui/logo/gemgames";
import { useRouter } from "next/router";
export default {
  logo: <GemGamesLogo height="36" color="light" />,
  project: {
    link: 'https://github.com/yitproject/gem'
  },
  search: {
    placeholder: "在此处搜索",
    emptyResult: "没有任何内容"
  },
  useNextSeoProps() {
    const { pathname } = useRouter();
    let titleTemplate = "%s - GemGames";
    if (pathname === "/") {
      titleTemplate = "GemGames Document";
    }
    return {
      titleTemplate
    };
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
      <a href="https://github.com/yitproject/gem">
        BSD 2-Clause License - ©{new Date().getFullYear()} GemGames.
      </a>
    )
  },
  editLink: {
    text: "编辑此页内容"
  },
  feedback: {
    content: "给予反馈"
  }
};