
import devlogo from "ui/logo/gemdev.png";
import Image from "next/image";
import GemGamesLogo from "ui/logo/gemgames";
import classes from "./logos.module.css";

const logos: {
  compoent: JSX.Element,
  name: string;
  href?: string;
}[] = [
    {
      compoent: <GemGamesLogo height="68px" style={{ margin: "4px" }} />,
      name: "GemGames"
    },
    {
      compoent: <Image alt="GemGames Development Team" height={84} src={devlogo} style={{ margin: -6 }} />,
      name: "GemGames Development Team"
    },
    {
      compoent: <h1>Goup</h1>,
      name: "Go Web Framwork",
      href: "https://github.com/startracex/goup"
    },
    {
      compoent: <h1>Godown</h1>,
      name: "Html/React compoents library",
      href: "https://github.com/startracex/godown"
    }
  ];

export default function Logos() {
  return <div className={classes.root}>
    {
      logos.map((logo) => <a className={classes.one} href={logo.href || "/"} key={logo.name}>
        {logo.compoent}
        <h4>{logo.name}</h4>
      </a>)
    }
  </div>;
};