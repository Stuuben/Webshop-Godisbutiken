let testName: string = "hej";

let userLS = JSON.parse(localStorage.getItem("user") || testName);

function printUserName() {
  console.log(userLS);

  let spanTag = document.getElementById("purchaseUser") as HTMLSpanElement;
  spanTag.innerHTML = String(userLS);
}
printUserName();

function uniqID() {
  let orderNr = document.getElementById("uniqeNr") as HTMLSpanElement;

  const id = Date.now().toString();

  orderNr.innerText = "E" + id;
}
uniqID();

let backHomeButton = document.getElementById(
  "backHomeButton"
) as HTMLButtonElement;
backHomeButton.addEventListener("click", () => {
  document.location.href = "./../pages/index.html";
});
console.log("hej");