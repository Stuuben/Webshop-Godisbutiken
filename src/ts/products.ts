import { Candy, CandyInCart, candys } from "./main";

let container = document.getElementById("main") as HTMLDivElement;

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

    let pDesc = document.createElement("p") as HTMLParagraphElement;
    pDesc.classList.add("product__desc");
    pDesc.innerHTML = candys[i].desc;

    let pTag = document.createElement("pTag") as HTMLParagraphElement;
    pTag.innerHTML = String(`Pris: ${candys[i].price} kr`);
    pTag.classList.add("candyPrice");

    let buyBtn = document.createElement("button") as HTMLButtonElement;
    buyBtn.innerHTML = "Köp";
    buyBtn.classList.add("buy");
    buyBtn.addEventListener("click", () => {
      handleClick(candys[i]);
      console.log(candys[i]);
    });

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(pDesc);
    div.appendChild(pTag);
    div.appendChild(buyBtn);
    container.appendChild(div);
  }
}
//Köp knappen
function handleClick(godis: Candy) {
  let candyLS = localStorage.getItem("godis");

  if (candyLS === null) {
    let customerCandystring = JSON.stringify([]);
    localStorage.setItem("godis", customerCandystring);
  }

  let getCandy: any = localStorage.getItem("godis");
  let currentCandy = JSON.parse(getCandy);

  let candyAlreadyInCart = false;
  for (let i = 0; i < currentCandy.length; i++) {
    if (currentCandy[i].name === godis.name) {
      currentCandy[i].amount++;
      candyAlreadyInCart = true;
    }
  }

  if (!candyAlreadyInCart) {
    let cartCandy = new CandyInCart(
      godis.name,
      godis.price,
      godis.type,
      godis.img,
      godis.desc,
      1
    );
    currentCandy.push(cartCandy);
  }
  localStorage.setItem("godis", JSON.stringify(currentCandy));
}

let filter = " ";

//Checkbox för sura godisar
let checkAll = document.getElementById("filterAll") as HTMLInputElement;
let checkboxSour = document.getElementById("filterSour") as HTMLInputElement;
let checkboxChocolate = document.getElementById(
  "filterChocolate"
) as HTMLInputElement;
let checkboxRaspberry = document.getElementById(
  "filterRaspberry"
) as HTMLInputElement;

function checkForFilter() {
  checkAll.addEventListener("change", () => {
    if (checkAll.checked === true) {
      container.innerHTML = " ";
      createHTML();
    }
  });

  checkboxSour.addEventListener("change", () => {
    if (checkboxSour.checked === true) {
      container.innerHTML = " ";
      filter = "Sur";

      if (filter == "Sur") {
        filteredProducts();
      }
    } else {
      container.innerHTML = "";
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
    }
  });

  checkboxRaspberry.addEventListener("change", () => {
    if (checkboxRaspberry.checked === true) {
      filter = "Hallon";

      if (filter == "Hallon") {
        filteredProducts();
      }
    } else {
      container.innerHTML = " ";
    }
  });
}

function handleFilteredClick(filtreratGodis) {
  console.log("Klickad!");
  console.log(filtreratGodis);

  let filterLS = localStorage.getItem("godis");

  if (filterLS === null) {
    let filteredCandyString = JSON.stringify([]);
    localStorage.setItem("godis", filteredCandyString);
  }

  let getFCandy: any = localStorage.getItem("godis");
  let currentFCandy = JSON.parse(getFCandy);

  let candyAlreadyInCart = false;
  for (let i = 0; i < currentFCandy.length; i++) {
    if (currentFCandy[i].name === filtreratGodis.name) {
      currentFCandy[i].amount++;
      candyAlreadyInCart = true;
    }
  }

  if (!candyAlreadyInCart) {
    let cartCandy = new CandyInCart(
      filtreratGodis.name,
      filtreratGodis.price,
      filtreratGodis.type,
      filtreratGodis.img,
      filtreratGodis.desc,
      1
    );
    currentFCandy.push(cartCandy);
  }
  localStorage.setItem("godis", JSON.stringify(currentFCandy));
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
    pTag.innerHTML = String(`Pris: ${filteredList[i].price} kr`);
    pTag.classList.add("candyPrice");

    let buyBtn = document.createElement("button") as HTMLButtonElement;
    buyBtn.innerHTML = "Köp";
    buyBtn.classList.add("buy");
    buyBtn.addEventListener("click", () => {
      handleFilteredClick(filteredList[i]);
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
console.log("hej");
