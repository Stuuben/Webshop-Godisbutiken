import { candyAgain } from "./kassa";

let testName: string = "hej";

let userLS = JSON.parse(localStorage.getItem("user") || testName);

function printUserName() {
  console.log(userLS);

  let spanTag = document.getElementById("purchaseUser") as HTMLSpanElement;
  spanTag.innerHTML = String(userLS);
}
printUserName();

function uniqID() {
  console.log("kik");
  let orderNr = document.getElementById("uniqeNr") as HTMLSpanElement;

  const id = Date.now().toString();

  orderNr.innerText = "E" + id;
}
uniqID();
