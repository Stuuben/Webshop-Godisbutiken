let modalForm = document.getElementById("myModal") as HTMLDivElement;

// Get the button that opens the modal
let modalBtn = document.getElementById("myBtn") as HTMLIFrameElement;

// Get the <span> element that closes the modal
let modalSpan = document.getElementsByClassName("close")[0];

// Can be empty array with correct type
let candyObj = JSON.parse(localStorage.getItem("godis") || "[]");

// When the user clicks on the button, open the modal
modalBtn.addEventListener("click", () => {
  candyObj = JSON.parse(localStorage.getItem("godis") || "[]");
  handleSummary();
  modalForm.classList.add("show");
});

// When the user clicks on <span> (x), close the modal
modalSpan.addEventListener("click", () => {
  modalForm.classList.remove("show");
});

// When the user clicks anywhere outside of the modal, close it
modalForm.addEventListener("click", (event) => {
  if (event.target === modalForm) {
    modalForm.classList.remove("show");
  }
});

//Hämtar från localstorage

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

  if (confirm("Är du säker på att du vill tömma hela varukorgen?")) {
    summary.innerHTML = "";
    candyObj.length = 0;
    localStorage.clear();

    console.log(candyObj);
    handleShoppinglist();
  }
});

//

function handleShoppinglist() {
  let shoppingCart = document.getElementById("candy__item") as HTMLDivElement;

  shoppingCart.innerHTML = "";

  for (let i = 0; i < candyObj.length; i++) {
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

    numberInput.value = candyObj[i].amount;

    numberInput.addEventListener("input", (event) => {
      let value: any = (event.target as HTMLInputElement).value;
      candyObj[i].amount = value;

      // Update localStorage
      let customerCandystring = JSON.stringify(candyObj);
      localStorage.setItem("godis", customerCandystring);

      handleSummary();
    });

    minusButton.addEventListener("click", () => subtrackCandy(i));
    // plusButton.addEventListener("click", () => addCandy(i));

    candyName.innerHTML = candyObj[i].name;
    candyPrice.innerHTML =
      String(candyObj[i].price * candyObj[i].amount) + " kr";
    minusButton.innerHTML = "Radera";
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

  for (let i = 0; i < candyObj.length; i++) {
    sum += candyObj[i].price * candyObj[i].amount;
    summary.innerHTML = sum.toString() + " kr";

    handleShoppinglist();
  }
}
handleSummary();

//

//

function subtrackCandy(i: number) {
  if (candyObj[i].amount > 1) {
    candyObj[i].amount--;
  } else {
    candyObj.splice(i, 1);
  }

  let customerCandystring = JSON.stringify(candyObj);
  localStorage.setItem("godis", customerCandystring);

  handleShoppinglist();
  handleSummary();
}
