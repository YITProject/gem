import { FlexFlow } from "godown/react";
import Logo from "ui/logo/gemgames";
import Link from "next-intl/link";
import { css } from "powerstyl";
export default function BaseFooter() {
  
  return (
    <footer slot="footer">
      <FlexFlow
        flexflow="column"
        style={css`
          background: var(--godown-c--nav-background);
          padding: 0.5em;
          width: 100%;
        `}
      >
        <section
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
            `}
          >
            <Logo color="auto" height={42} />
            <Link
              style={css`
                margin: 6px;
                font-size: 20px;
              `}
              href={"/"}
            >
              Gem Games
            </Link>
          </div>

          <div>
            <a
              style={css`
                margin: 6px;
              `}
              href="http://docs.example.com/ua"
            >
              服务条款
            </a>
            <a
              style={css`
                margin: 6px;
              `}
              href="http://docs.example.com/pp"
            >
              隐私政策
            </a>
          </div>
        </section>

        <a
          style={css`
            display: flex;
            justify-content: center;
            margin: 8px;
          `}
          href="https://github.com/YITProject/gem"
        >
          &copy; {new Date().getFullYear()} GemGames
        </a>
        <section></section>
      </FlexFlow>
    </footer>
  );
}
