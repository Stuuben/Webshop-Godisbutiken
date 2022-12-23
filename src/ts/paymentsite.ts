import { candys } from "./main";

let confirmBuy = document.getElementById("confirmButton") as HTMLButtonElement;

confirmBuy.addEventListener("click", customerPurchase);

function customerPurchase() {
  console.log("Köpt");
  alert("Du har köpt!");
  candys.length = 0;
}
