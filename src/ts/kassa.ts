import { Candy, candys } from "./main";

let container = document.getElementById(
  "checkout__container"
) as HTMLDivElement;

let godis: string = "godis";

//Hämtar från localstorage
let candyObj = JSON.parse(localStorage.getItem("godis") || godis);

//Omvandlar objekten från LS till nya objekt
let candyAgain = candyObj.map((candy) => {
  return new Candy(candy.name, candy.price, candy.type, candy.img);
});

//Loopar igenom de nya objekten
function localStorageHTML() {
  for (let i = 0; i < candyAgain.length; i++) {
    console.log(candyAgain[i]);

    let div = document.createElement("div") as HTMLDivElement;
    div.classList.add("checkout");

    let img = document.createElement("img") as HTMLImageElement;
    img.src = candyAgain[i].img;
    img.classList.add("checkout__img");

    let info = document.createElement("div") as HTMLDivElement;
    info.classList.add("checkout__info");

    let pTag = document.createElement("p") as HTMLParagraphElement;
    pTag.innerHTML = candyAgain[i].name;
    pTag.classList.add("candy");

    let priceTag = document.createElement("p") as HTMLParagraphElement;
    priceTag.innerHTML = String(`Pris: ${candyAgain[i].price} kr`);
    priceTag.classList.add("price");

    div.appendChild(img);
    div.appendChild(pTag);
    div.appendChild(priceTag);
    container.appendChild(div);

    console.log(candyAgain[i]);
  }
}

localStorageHTML();

console.log("shoppingcart");

let paymentButton = document.getElementById("paymentButton") as HTMLDivElement;

paymentButton.addEventListener("click", () => {
  console.log("click");
  document.location.href = "/pages/paymentsite.html";
});

let trashcan = document.getElementById("trashcan") as HTMLDivElement;
trashcan.addEventListener("click", () => {
  let summary = document.getElementById(
    "item__summary"
  ) as HTMLParagraphElement;
  summary.innerHTML = "";
  candyAgain.length = 0;

  console.log(candyAgain);
  handleShoppinglist();
});

//

function handleShoppinglist() {
  let shoppingCart = document.getElementById("candy__item") as HTMLDivElement;

  shoppingCart.innerHTML = "";

  for (let i = 0; i < candyAgain.length; i++) {
    let candyItemWrapper = document.createElement("div");

    candyItemWrapper.classList.add("itemWrapper");
    let candyName = document.createElement("p");
    candyName.classList.add("candy__name");
    let candyPrice = document.createElement("span");

    let minusButton = document.createElement("button");
    minusButton.classList.add("button__minus");
    // let plusButton = document.createElement("button");
    // plusButton.classList.add("button__plus");

    let numberInput = document.createElement("input") as HTMLInputElement;
    numberInput.classList.add("input__number");
    numberInput.type = "number";
    numberInput.min = "1";

    numberInput.value = candyAgain[i].amount.toString();

    numberInput.addEventListener("input", (event) => {
      const value = (event.target as HTMLInputElement).value;
      candyAgain[i].amount = Number(value);
      handleSummary();
    });

    minusButton.addEventListener("click", () => subtrackCandy(i));
    // plusButton.addEventListener("click", () => addCandy(i));

    candyName.innerHTML = candyAgain[i].name;
    candyPrice.innerHTML =
      String(candyAgain[i].price * candyAgain[i].amount) + " kr";
    minusButton.innerHTML = "remove";
    // plusButton.innerHTML = "+";

    candyItemWrapper.appendChild(minusButton);
    // candyItemWrapper.appendChild(plusButton);
    candyItemWrapper.appendChild(numberInput);
    candyItemWrapper.appendChild(candyName);

    candyName.appendChild(candyPrice);
    shoppingCart.appendChild(candyItemWrapper);
  }
}
handleShoppinglist();

//

// Räknar ut Summan av alla varorna

function handleSummary() {
  let sum = 0;

  let summary = document.getElementById(
    "item__summary"
  ) as HTMLParagraphElement;
  summary.innerHTML = "";

  for (let i = 0; i < candys.length; i++) {
    sum += candys[i].price * candys[i].amount;
    summary.innerHTML = sum.toString() + " kr";
    console.log(candys[i].amount);
    handleShoppinglist();
  }
}
handleSummary();

//

//

function subtrackCandy(i: number) {
  console.log("click-");
  console.log(candys[i].price);

  candys.splice(i, 1);

  handleShoppinglist();
  handleSummary();
}

function addCandy(i: number) {
  console.log("click+");

  candys.push(candys[i]);
  handleShoppinglist();
  handleSummary();
}
