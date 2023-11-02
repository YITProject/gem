import { staticStyles } from "../styles/static";
import origin from "../lib/origin";
import { testEmail } from "../lib/vaild";
import { sha1 } from "../lib/crypto";
import { BaseForm, RouteView } from "godown";
import { customElement, html, CSSResultGroup, GlobalSTD } from "godown/deps";
import { HtmlTemplate } from "godown/tmpl";
@customElement("login-page")
export class LoginPage extends GlobalSTD {
  static styles = staticStyles as CSSResultGroup;
  onSubmit() {
    const f = this.shadowRoot?.querySelector("base-form") as BaseForm;
    const [_, value] = f.namevalue();
    let { email, password } = value;
    if (!testEmail(email)) {
      return;
    }
    password = sha1(password);
    fetch(`${origin}/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { token } = data;
        localStorage.setItem("TOKEN", token);
        const callbackURL = new URLSearchParams(window.location.search).get(
          "callback_url",
        );
        if (callbackURL) {
          history.pushState(null, "", "/auth" + window.location.search);
          RouteView.updateAll();
        }
      });
  }

  render(): HtmlTemplate {
    return html`
      <flex-flow class="wrapper">
        <base-form name="login">
          <label-input label="E-mail" name="email"></label-input>
          <label-input
            label="Password"
            type="password"
            name="password"
          ></label-input>
        </base-form>
        <base-button @click=${this.onSubmit}><span>Submit</span></base-button>
        <link-a href="/signup">Create account</link-a>
      </flex-flow>
    `;
  }
}
