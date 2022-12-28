import { candyAgain } from "./kassa";

let testName: string = "hej";

let userLS = JSON.parse(localStorage.getItem("user") || testName);

function printUserName() {
  console.log(userLS);
  console.log(testName);
  let spanTag = document.getElementById("purchaseUser") as HTMLSpanElement;
  spanTag.innerHTML = String(userLS);
}
printUserName();
