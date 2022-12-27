let confirmBuy = document.getElementById("confirmButton") as HTMLButtonElement;

// export const userName = (
//   document.getElementById("firstname") as HTMLInputElement
// ).value;

let userName = document.getElementById("firstname") as HTMLInputElement;


confirmBuy.addEventListener("click", customerPurchase);


function customerPurchase() {
  console.log(userName.value);

  // let pTag = document.getElementById("hej") as HTMLParagraphElement;
  // pTag.innerHTML = userName.value;

  document.location.href = "/pages/purchase.html";
}

export let nameValue = userName.value;