let confirmBuy = document.getElementById("confirmButton") as HTMLButtonElement;

// export const userName = (
//   document.getElementById("firstname") as HTMLInputElement
// ).value;

export const userName = document.getElementById(
  "firstname"
) as HTMLInputElement | null;

confirmBuy.addEventListener("click", customerPurchase);

function customerPurchase(e: { preventDefault: () => void }) {
  e.preventDefault();
  console.log("handlat");
  console.log(userName?.value);

  document.location.href = "/pages/purchase.html";

  // if (userName.value.length > 1) {

  // console.log("längre än 1");
  // } else {
  //   console.log("else");
  // }
}
