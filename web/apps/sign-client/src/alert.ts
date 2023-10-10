import { AlertItem } from "godown";
type AlertInit = {
  call: "success" | "info" | "warning" | "danger" | "hide";
  autoclose: number;
  title: string;
  content: string;
};
const defaultAlertInit: AlertInit = {
  call: "info",
  autoclose: 3000,
  title: "Alert",
  content: "",
};
export function alert(args: Partial<AlertInit>) {
  const root = document.getElementById("alert-root");
  if (root) {
    // @ts-ignore
    alert = alertMust;
    return;
  }
  const createRoot = document.createElement("div");
  createRoot.id = "alert-root";
  document.body.appendChild(createRoot);
  alertMust(args);
}

function alertMust(args: Partial<AlertInit>) {
  const root = document.querySelector("#alert-root");
  const ai = new AlertItem();
  Object.assign(ai, defaultAlertInit, args);
  root.appendChild(ai);
}
