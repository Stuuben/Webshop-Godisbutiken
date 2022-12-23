import { Candy, candys } from "./main";

let container = document.getElementById("main") as HTMLDivElement;
let boughtCandy: Candy[] = [];

//Loopar Candys objekten in i HTML:en
function createHTML() {
  for (let i = 0; i < candys.length; i++) {
    let div = document.createElement("div") as HTMLDivElement;
    div.classList.add("product");

    let img = document.createElement("img") as HTMLImageElement;
    img.src = candys[i].img;
    img.classList.add("product__img");

    let h3 = document.createElement("h3") as HTMLHeadingElement;
    h3.innerHTML = candys[i].name;

    let pTag = document.createElement("pTag") as HTMLParagraphElement;
    pTag.innerHTML = String(`Pris: ${candys[i].price} kr`);
    pTag.classList.add("candyPrice");

    let buyBtn = document.createElement("button") as HTMLButtonElement;
    buyBtn.innerHTML = "Köp";
    buyBtn.classList.add("buy");
    buyBtn.addEventListener("click", () => {
      handleClick(candys[i]);
    });

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(pTag);
    div.appendChild(buyBtn);
    container.appendChild(div);
  }
}
//Köp knappen
function handleClick(godis) {
  boughtCandy.push(godis);
  let buyCandy = JSON.stringify(boughtCandy);
  localStorage.setItem("TEST", buyCandy);

  console.log("klickad", godis);
  // candys.push(godis);

  console.log(candys);
  console.log(boughtCandy);
}

let filter = " ";

//Checkbox för sura godisar
let checkboxSour = document.getElementById("filterSour") as HTMLInputElement;
let checkboxChocolate = document.getElementById(
  "filterChocolate"
) as HTMLInputElement;
let checkboxRaspberry = document.getElementById(
  "filterRaspberry"
) as HTMLInputElement;

function checkForFilter() {
  checkboxSour.addEventListener("change", () => {
    if (checkboxSour.checked === true) {
      filter = "Sur";

      if (filter == "Sur") {
        filteredProducts();
        console.log("Hej");
      }
    } else {
      container.innerHTML = "";
      createHTML();
    }
  });

  checkboxChocolate.addEventListener("change", () => {
    if (checkboxChocolate.checked === true) {
      filter = "Choklad";
      console.log("Choklad");

      if (filter == "Choklad") {
        filteredProducts();
      }
    } else {
      container.innerHTML = " ";
      createHTML();
    }
  });

  checkboxRaspberry.addEventListener("change", () => {
    if (checkboxRaspberry.checked === true) {
      filter = "Hallon";
      console.log("Hallon");

      if (filter == "Hallon") {
        filteredProducts();
      }
    } else {
      container.innerHTML = " ";
      createHTML();
    }
  });
}

function filteredProducts() {
  let filteredList = candys.filter((candy) => {
    return candy.type === filter;
  });

  container.innerHTML = " ";

  for (let i = 0; i < filteredList.length; i++) {
    console.log(filteredList[i]);

    let div = document.createElement("div") as HTMLDivElement;
    div.classList.add("product");

    let img = document.createElement("img") as HTMLImageElement;
    img.src = filteredList[i].img;
    img.classList.add("product__img");

    let h3 = document.createElement("h3") as HTMLHeadingElement;
    h3.innerHTML = filteredList[i].name;

    let pTag = document.createElement("p") as HTMLParagraphElement;
    pTag.innerHTML = String(`Pris: ${candys[i].price} kr`);
    pTag.classList.add("candyPrice");

    let buyBtn = document.createElement("button") as HTMLButtonElement;
    buyBtn.innerHTML = "Köp";
    buyBtn.classList.add("buy");
    buyBtn.addEventListener("click", () => {
      handleClick(candys[i]);
    });

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(pTag);
    div.appendChild(buyBtn);
    container.appendChild(div);
  }
}

checkForFilter();
createHTML();
