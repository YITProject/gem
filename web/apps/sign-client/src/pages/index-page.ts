import {
  CSSResultGroup,
  customElement,
  LitElement,
  html,
  css,
} from "godown/deps";
import { staticStyles } from "../styles/static";
@customElement("index-page")
export class IndexPage extends LitElement {
  static styles: CSSResultGroup = [
    staticStyles,
    css`
      link-a {
        display: block;
        margin: 10px 0;
      }
    `,
  ];
  render() {
    return html`
      <div class="wrapper">
        <link-a href="/login">Login</link-a>
        <link-a href="/auth">Authorization</link-a>
        <link-a href="/signup">Signup</link-a>
        <link-a
          href="https://github.com/startracex/goupapp/blob/main/apps/sign#readme"
        >
          Document
        </link-a>
      </div>
    `;
  }
}
