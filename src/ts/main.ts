console.log("hej");

class Candy {
  name: string;
  price: number;
  type: string;
  constructor(name: string, price: number, type: string) {
    this.name = name;
    this.price = price;
    this.type = type;
  }
}

let fizzyBubliz = new Candy("Fizzy Bubliz", 6, "Sur");
let peanutSquare = new Candy("Jordnötsruta", 5, "Choklad");
let punsch = new Candy("Punschpralin", 4.5, "Choklad");
let sourNapps = new Candy("Sura Nappar", 5, "Sur");
let geisha = new Candy("Geisha", 8, "Choklad");
let ferrari = new Candy("Ferrari", 5, "Hallon");
let marabou = new Candy("Marabou", 8, "Choklad");
let rassberrySkull = new Candy("Hallonlakritsskalle", 5.5, "Hallon");

let candys: Candy[] = [
  fizzyBubliz,
  peanutSquare,
  punsch,
  sourNapps,
  geisha,
  ferrari,
  marabou,
  rassberrySkull,
];
console.log(candys);

/* let candyItem = document.getElementById("candy__item") as HTMLDivElement;

function handleCandys() {
  for (let i = 0; i < candys.length; i++) {
    let candyName = document.createElement("p");

    candyName.innerHTML += candys[i].name;

    console.log(candys[i].price);
    candyItem.appendChild(candyName);
  }
} */

/* handleCandys(); */

// Betala knappen skickar en vidare till paymentsite
/* let paymentButton = document.getElementById(
  "paymentButton"
) as HTMLButtonElement;

paymentButton.addEventListener("click", function () {
  document.location.href = "/src/pages/paymentsite.html";
});
 */
