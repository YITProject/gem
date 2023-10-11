import { staticStyles } from "../styles/static";
import origin from "../lib/origin";
import { testEmail, testPassword } from "../lib/vaild";
import { sha1 } from "../lib/crypto";
import { BaseForm, RouteView } from "godown";
import { customElement, LitElement, html } from "godown/deps";
@customElement("login-page")
export class LoginPage extends LitElement {
  static styles = staticStyles;
  onSubmit() {
    const f = this.shadowRoot?.querySelector("base-form") as BaseForm;
    const [name, value] = f.namevalue();
    let { email, password } = value;
    if (!testEmail(email)) {
      return;
    }
    if (!testPassword(password, value["password verify"])) {
      return;
    }
    password = sha1(password);
    console.log(email, password);
    fetch(`${origin}/${name}`, {
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
  protected render() {
    return html`
      <flex-flow class="wrapper">
        <base-form name="login">
          <label-input label="E-mail" name="email"></label-input>
          <label-input label="Password" type="password"></label-input>
        </base-form>
        <base-button @click=${this.onSubmit}><span>Submit</span></base-button>
        <link-a href="/signup">Create account</link-a>
      </flex-flow>
    `;
  }
}
