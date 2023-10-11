import { FlexFlow } from "godown/react";
import Logo from "ui/logo/gemgames";

export default function BaseFooter() {
  return (
    <footer slot="footer">
      <FlexFlow className="col" m="690px">
        <Logo color="auto" />
        <a href="https://github.com/YITProject/gem">
          &copy; {new Date().getFullYear()} GemGames
        </a>
      </FlexFlow>
    </footer>
  );
}
