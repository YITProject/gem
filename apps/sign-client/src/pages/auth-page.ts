import { staticStyles } from "../styles/static";
import origin from "../lib/origin";
import { RouteView } from "godown";
import {
  ifDefined,
  customElement,
  property,
  LitElement,
  html,
} from "godown/deps";
@customElement("auth-page")
export class AuthPage extends LitElement {
  token!: string | null;
  callbackURL!: string | null;
  callbackURLOrigin!: string | null;
  static styles = staticStyles;
  @property({ attribute: false }) state: {
    [key: string]: any;
  } | null = null;
  onSubmit() {
    fetch(`${origin}/auth`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { code } = data;
        window.location.href = `${this.callbackURL}?code=${code}`;
      })
      .catch(() => { });
  }
  protected firstUpdated() {
    this.token = localStorage.getItem("TOKEN");
    this.callbackURL = new URLSearchParams(window.location.search).get(
      "callback_url",
    );
    if (!this.token || !this.callbackURL) {
      this.toLogin();
      return;
    }
    this.callbackURLOrigin = new URL(this.callbackURL).origin;
    const payload = this.token.split(".")[1];
    if (payload) {
      this.state = JSON.parse(atob(payload));
    }
    fetch(`${origin}/api/user`, {
      method: "post",
      headers: {
        Authorization: "Bearer " + this.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.state = data;
      })
      .catch(() => {
        this.toLogin();
      });
  }
  toLogin() {
    // we need to change the route-view's path and schedule it's update method `RouteView.updateAll`
    history.pushState(null, "", "/login" + window.location.search);
    RouteView.updateAll();
  }
  protected render() {
    return html`
      <flex-flow class="wrapper">
        ${this.state
        ? html`
              ${this.state.email}
              <span> You're authorizing</span>
              <span style="font-weight: 700;">another application</span>
              <a
                style="font-style: italic;text-decoration: underline;"
                href=${ifDefined(
          this.callbackURLOrigin === null
            ? undefined
            : this.callbackURLOrigin,
        )}
              >
                ${this.callbackURLOrigin}
              </a>
              <span> to gain account access </span>
              <span style="font-weight: 700;">(read-only)</span>
              <base-button @click=${this.onSubmit}>
                <span>Permission</span>
              </base-button>
              <link-a href="/login">Change account</link-a>
            `
        : html` Wait a moment. `}
      </flex-flow>
    `;
  }
}
