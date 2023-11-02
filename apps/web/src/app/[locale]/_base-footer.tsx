"use client";
import { FlexFlow, TimeBar } from "godown/react";
import Logo from "ui/logo/gemgames";
import Link from "next-intl/link";
import { css } from "powerstyl";
import { useTranslations } from "next-intl";
import { i18n } from "../../../next.config";

const footerLinks = [
  {
    title: "Design",
    list: [
      {
        text: "Godown",
        href: "https://github.com/startracex/godown",
      },
      {
        text: "Powerstyl",
        href: "https://github.com/startracex/powerstyl",
      },
      {
        text: "Icons8",
        href: "https://icons8.com",
      },
    ],
  },
  {
    title: "Framework",
    list: [
      {
        text: "Next.js",
        href: "https://nextjs.org",
      },
      {
        text: "React",
        href: "https://react.dev",
      },
      {
        text: "Lit",
        href: "https://lit.dev",
      },
    ],
  },
  {
    title: "Resources",
    list: [
      {
        text: "Docs",
        href: "http://docs.example.domain",
      },
      {
        text: "Github",
        href: "https://github.com/YITProject/gem",
      },
      {
        text: "Release",
        href: "https://github.com/YITProject/gem/releases",
      },
    ],
  },
];
export default function BaseFooter() {
  const t = useTranslations("(global)");

  return (
    <footer
      slot="footer"
      style={css`
        display: contents;
      `}
    >
      <FlexFlow
        flexflow="column"
        style={css`
          background: var(--godown--nav-background);
          padding: 0.5em 2.5%;
          width: 100%;
        `}
      >
        <FlexFlow
          style={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5em 2em;
          `}
        >
          <div>
            <Link
              href="/"
              style={css`
                margin: 6px;
                display: flex;
              `}
            >
              <Logo color="light" height={36} />
            </Link>
          </div>

          <FlexFlow
            style={css`
              margin: 0.5em;
            `}
          >
            {[
              {
                href: "http://docs.example.com/ua",
                text: "ua",
              },
              {
                href: "http://docs.example.com/pp",
                text: "pp",
              },
            ].map((obj) => {
              return (
                <a
                  href={obj.href}
                  key={obj.href}
                  style={css`
                    margin: 6px;
                  `}
                >
                  {t(obj.text)}
                </a>
              );
            })}
          </FlexFlow>
        </FlexFlow>
        <FlexFlow
          className="col-m"
          style={css`
            justify-content: space-around;
            padding: 10px;
          `}
        >
          {footerLinks.map((r) => {
            return (
              <div className="col-m " key={r.title}>
                <h4
                  style={css`
                    margin-bottom: 10px;
                  `}
                >
                  {r.title}
                </h4>
                {r.list.map((l) => {
                  return (
                    <Link
                      href={l.href}
                      key={l.text}
                      style={css`
                        line-height: 20px;
                        margin-bottom: 10px;
                        font-size: 16px;
                        display: block;
                      `}
                    >
                      {l.text}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </FlexFlow>
        <FlexFlow flexflow="column"
          style={css`
            align-items: center;
          `}
        >
          {i18n.locales.map((locale) => {
            return (
              <Link
                href={locale}
                key={locale}
                locale={locale}
                style={css`
                  margin-bottom: 6px;
                  color: #e1e1e1;
                `}
              >
                {i18n.summary[locale]}
              </Link>
            );
          })}
        </FlexFlow>

        <a
          href="https://github.com/YITProject/gem"
          style={css`
            margin: 0.5pc auto;
            width: fit-content;
          `}
        >
          &copy;
          <TimeBar format="YYYY " />
          GemGames
        </a>
        <section />
      </FlexFlow>
    </footer>
  );
}
