"use client";
import { FlexFlow } from "godown/react";
import Logo from "ui/logo/gemgames";
import Link from "next-intl/link";
import { css } from "powerstyl";
import { useTranslations } from "next-intl";

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
          background: var(--godown-c--nav-background);
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
                display:flex;
              `}
            >
              <Logo color="auto" height={42} />
            </Link>
          </div>

          <div
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
          </div>
        </FlexFlow>

        <a
          href="https://github.com/YITProject/gem"
          style={css`
            display: flex;
            justify-content: center;
            margin: 8px;
          `}
        >
          &copy; {new Date().getFullYear()} GemGames
        </a>
        <section />
      </FlexFlow>
    </footer>
  );
}
