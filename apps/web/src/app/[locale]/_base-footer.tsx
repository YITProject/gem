"use client";
import { FlexFlow } from "godown/react";
import Logo from "ui/logo/gemgames";
import Link from "next-intl/link";
import { css } from "powerstyl";

export default function BaseFooter() {
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
          <div
            style={css`
              display: flex;
              align-items: center;
              margin: 0.5em;
            `}
          >
            <Logo color="auto" height={42} />
            <Link
              href="/"
              style={css`
                margin: 6px;
                font-size: 20px;
              `}
            >
              Gem Games
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
                text: "服务条款",
              },
              {
                href: "http://docs.example.com/pp",
                text: " 隐私政策",
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
                  服务条款
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
