import { userName } from "./paymentsite";

function showUserName() {
  console.log("hallå");
  let spanTag = document.getElementById("purchaseUser") as HTMLSpanElement;
  spanTag.innerHTML = "namn";
}

showUserName();
