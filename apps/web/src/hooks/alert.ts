import { AlertItem } from "godown";

// eslint-disable-next-line import/no-mutable-exports
let alert = (option: Partial<AlertItem>) => {
  const root = document.querySelector("#alert");
  if (!root) {
    const a = document.createElement("div");
    a.id = "alert";
    document.body.appendChild(a);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    alert = (option: Partial<AlertItem>) => {
      AlertItem.alert(document.querySelector("#alert")!, option);
    };
  }
  alert(option);
};

export default alert;
