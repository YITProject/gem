import "godown";
import "./styles/index.css";
import { SignupPage } from "./pages/signup-page";
import { LoginPage } from "./pages/login-page";
import { AuthPage } from "./pages/auth-page";
import { IndexPage } from "./pages/index-page";
const routes = [
  { path: "/", component: new IndexPage() },

  { path: "/signup", component: new SignupPage() },
  { path: "/login", component: new LoginPage() },
  { path: "/auth", component: new AuthPage() },
];
const routeView = document.querySelector("route-view");
if (routeView) {
  routeView.routes = routes;
}