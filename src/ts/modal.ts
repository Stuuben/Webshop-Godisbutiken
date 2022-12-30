// Get the modal
let modalForm = document.getElementById("myModal") as HTMLDivElement;

// Get the button that opens the modal
let modalBtn = document.getElementById("myBtn") as HTMLButtonElement;

// Get the <span> element that closes the modal
let modalSpan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

modalBtn.addEventListener("click", () => {
  modalForm.style.display = "block";
  console.log("clickck");
});

// When the user clicks on <span> (x), close the modal
modalSpan.addEventListener("click", () => (modalForm.style.display = "none"));

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalForm) {
    modalForm.style.display;
  }
};

// --------------------------

class Cart {
  name: string;
  price: number;
  amount: number;
  img: string;
  constructor(name: string, price: number, amount: number, img: string) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.img = img;
  }
}

//Sträng för null i LS
let godis: string = "godis";

//Hämtar från localstorage
let candyObj = JSON.parse(localStorage.getItem("godis") || godis);

//Omvandlar objekten från LS till nya objekt
let candyAgain = candyObj.map(
  (candy: { name: string; price: number; amount: number; img: string }) => {
    return new Cart(candy.name, candy.price, candy.amount, candy.img);
  }
);

//paymentButton
let paymentButton = document.getElementById("paymentButton") as HTMLDivElement;

paymentButton.addEventListener("click", () => {
  console.log("click");
  document.location.href = "/pages/paymentsite.html";
});

// Trashcan
let trashcan = document.getElementById("trashcan") as HTMLDivElement;
trashcan.addEventListener("click", () => {
  let summary = document.getElementById(
    "item__summary"
  ) as HTMLParagraphElement;

  if (confirm("Är du säker på att du vill tömma hela varukorgen?")) {
    summary.innerHTML = "";
    candyAgain.length = 0;
    localStorage.clear();

    console.log(candyAgain);
    handleShoppinglist();
  }
});

handleShoppinglist();

handleSummary();

//------------------------------
// handleShoppinglist()
// handleSummary()
// subtrackCandy(i)
// removeDoubles()
//------------------------------

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

    if (candyAgain[i].amount == null) {
      candyAgain[i].amount = 1;
    }
    numberInput.value = candyAgain[i].amount.toString();

    //Chaninging number
    numberInput.addEventListener("input", (event) => {
      const value = (event.target as HTMLInputElement).value;
      candyAgain[i].amount = Number(value);

      // Update localStorage
      let customerCandystring = JSON.stringify(candyAgain);
      localStorage.setItem("godis", customerCandystring);

      handleSummary();
    });

    minusButton.addEventListener("click", () => subtrackCandy(i));

    candyName.innerHTML = candyAgain[i].name;

    numberInput.innerHTML = candyAgain[i].amount.toString();
    candyPrice.innerHTML =
      String(candyAgain[i].price * candyAgain[i].amount) + " kr";
    minusButton.innerHTML = "remove";

    candyItemWrapper.appendChild(minusButton);
    candyItemWrapper.appendChild(numberInput);
    candyItemWrapper.appendChild(candyName);

    candyName.appendChild(candyPrice);
    shoppingCart.appendChild(candyItemWrapper);

    /*    if (candyAgain[i].name === candyAgain[i].name) {
        candyAgain.pop();
      }
      console.log(candyAgain); */
    removeDoubles();
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

  for (let i = 0; i < candyAgain.length; i++) {
    sum += candyAgain[i].price * candyAgain[i].amount;
    summary.innerHTML = sum.toString() + " kr";

    handleShoppinglist();
  }
}
handleSummary();

//

//

function subtrackCandy(i: number) {
  console.log("click-");
  console.log(candyAgain[i].price);

  candyAgain.splice(i, 1);

  // Update localStorage

  let customerCandystring = JSON.stringify(candyAgain);
  localStorage.setItem("godis", customerCandystring);

  handleShoppinglist();
  handleSummary();
}

function removeDoubles() {
  for (let i = 0; i < candyAgain.length; i++) {
    for (let x = 0; x < candyAgain.length; ++x) {
      if (i !== x) {
        if (candyAgain[i].name === candyAgain[x].name) {
          candyAgain.splice(x, 1);
        }
      }
    }
  }
}
function getModal(): any {
  throw new Error("Function not implemented.");
}
