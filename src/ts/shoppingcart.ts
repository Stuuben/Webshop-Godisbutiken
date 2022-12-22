import { Candy, candys } from "./main";

console.log("shoppingcart");

let paymentButton = document.getElementById("paymentButton") as HTMLDivElement;

paymentButton.addEventListener("click", () => {
  console.log("click");
  document.location.href = "/src/pages/paymentsite.html";
});

let trashcan = document.getElementById("trashcan") as HTMLDivElement;
trashcan.addEventListener("click", () => {
  candys.length = 0;
  console.log(candys);
  handleShoppinglist();
});

//

function handleShoppinglist() {
  let shoppingCart = document.getElementById("candy__item") as HTMLDivElement;

  shoppingCart.innerHTML = "";

  for (let i = 0; i < candys.length; i++) {
    let candyItemWrapper = document.createElement("div");
    candyItemWrapper.classList.add("itemWrapper");
    let candyName = document.createElement("p");

    let candyPrice = document.createElement("span");

    candyName.innerHTML = candys[i].name;
    candyPrice.innerHTML = String(candys[i].price) + " kr";

    candyItemWrapper.appendChild(candyName);
    candyName.appendChild(candyPrice);
    shoppingCart.appendChild(candyItemWrapper);
  }
}
handleShoppinglist();

let sum = 0;

function addSummary() {
  let summary = document.getElementById(
    "item__summary"
  ) as HTMLParagraphElement;

  for (let i = 0; i < candys.length; i++) {
    //summary.innerHTML += (candys[i].price += sum).toString();
    sum += candys[i].price;
    summary.innerHTML = sum.toString();
  }
}

addSummary();
