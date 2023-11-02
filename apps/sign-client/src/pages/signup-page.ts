import { customElement, html, GlobalSTD, CSSResultGroup } from "godown/deps";
import { staticStyles } from "../styles/static";
import origin from "../lib/origin";
import { testEmail, testPassword } from "../lib/vaild";
import { sha1 } from "../lib/crypto";
import { BaseForm, RouteView } from "godown";
import { HtmlTemplate } from "godown/tmpl";
@customElement("signup-page")
export class SignupPage extends GlobalSTD {
  static styles = staticStyles as unknown as CSSResultGroup;
  onSubmit() {
    const f = this.shadowRoot?.querySelector("base-form") as BaseForm;
    const [_, value] = f.namevalue();
    let { email, password } = value;
    if (!testEmail(email)) {
      return;
    }
    if (!testPassword(password, value["password verify"])) {
      return;
    }
    password = sha1(password);
    fetch(`${origin}/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(() => {
      const callbackURL = new URLSearchParams(window.location.search).get(
        "callback_url",
      );
      if (callbackURL) {
        history.pushState(null, "", "/login" + window.location.search);
        RouteView.updateAll();
      }
    });
  }
  render(): HtmlTemplate {
    return html`
      <flex-flow class="wrapper">
        <base-form>
          <label-input label="E-mail" name="email"></label-input>
          <label-input label="Password" type="password"></label-input>
          <label-input label="Password Verify" type="password"></label-input>
        </base-form>
        <base-button @click=${this.onSubmit}><span>Submit</span></base-button>
        <link-a href="/login">Go to login</link-a>
      </flex-flow>
    `;
  }
}
