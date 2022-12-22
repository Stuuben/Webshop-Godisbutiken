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
  summary.innerHTML = "0 kr";
  console.log(candys);
  handleShoppinglist();
});

//

function handleShoppinglist() {
  let shoppingCart = document.getElementById("candy__item") as HTMLDivElement;

  shoppingCart.innerHTML = "";

  for (let i = 0; i < candys.length; i++) {
    let candyItemWrapper = document.createElement("div");
    let buttonWrapper = document.createElement("div");
    candyItemWrapper.classList.add("itemWrapper");
    let candyName = document.createElement("p");
    candyName.classList.add("candy__name");
    let candyPrice = document.createElement("span");
    let minusButton = document.createElement("button");
    minusButton.classList.add("button__minus");
    let plusButton = document.createElement("button");
    plusButton.classList.add("button__plus");

    minusButton.addEventListener("click", () => subtrackCandy(i));
    plusButton.addEventListener("click", () => addCandy(i));

    candyName.innerHTML = candys[i].name;
    candyPrice.innerHTML = String(candys[i].price) + " kr";
    minusButton.innerHTML = "-";
    plusButton.innerHTML = "+";

    candyItemWrapper.appendChild(minusButton);
    candyItemWrapper.appendChild(plusButton);
    candyItemWrapper.appendChild(candyName);
    candyName.appendChild(candyPrice);
    shoppingCart.appendChild(candyItemWrapper);
  }
}
handleShoppinglist();

//

// Räknar ut Summan av alla varorna
let sum = 0;
let summary = document.getElementById("item__summary") as HTMLParagraphElement;
function handleSummary() {
  for (let i = 0; i < candys.length; i++) {
    sum += candys[i].price;
    summary.innerHTML = sum.toString() + " kr";
  }
}
handleSummary();

//

//
function subtrackCandy(i: number) {
  console.log("click-");
  console.log(candys[i].price);
  console.log(sum);
  candys.splice(i, 1);

  handleShoppinglist();
  handleSummary();
}

function addCandy(i) {
  console.log("click+");
  candys.push(candys[i]);
  handleShoppinglist();
  handleSummary();
}
