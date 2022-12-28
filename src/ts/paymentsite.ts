let confirmBuy = document.getElementById("confirmButton") as HTMLButtonElement;

let userName = document.getElementById("firstname") as HTMLInputElement;

confirmBuy.addEventListener("click", customerPurchase);

function customerPurchase() {
  console.log(userName.value);

  if (userName.value.length > 1) {
    let userString = JSON.stringify(userName.value);
    localStorage.setItem("user", userString);

    document.location.href = "./../pages/purchase.html";
  }
}
