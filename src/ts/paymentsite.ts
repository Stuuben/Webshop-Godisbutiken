let confirmBuy = document.getElementById("confirmButton") as HTMLButtonElement;

export const userName = (document.getElementById("firstname") as HTMLInputElement).value;

confirmBuy.addEventListener("click", customerPurchase);

function customerPurchase() {
  console.log("handlat");
  document.location.href = "/pages/purchase.html";
}

