import { candys } from "./main";

let confirmBuy = document.getElementById("confirmButton") as HTMLButtonElement;

let userName = document.getElementById("firstname") as HTMLInputElement;

confirmBuy.addEventListener("click", customerPurchase);

function customerPurchase() {
  console.log(userName.value);
  candyAgain.length = 0;

  let userString = JSON.stringify(userName.value);
  localStorage.setItem("user", userString);

  document.location.href = "./../pages/purchase.html";
}
