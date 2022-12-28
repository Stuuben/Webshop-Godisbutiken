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
  // boughtCandy.push(godis);
  // let candyLS = localStorage.getItem("godis");
  // let customerCandystring = JSON.stringify(boughtCandy);
  // localStorage.setItem("godis", customerCandystring);

  let candyLS = localStorage.getItem("godis");

  if(candyLS === null) {
    boughtCandy.push(godis);
    let customerCandystring = JSON.stringify(boughtCandy);
    localStorage.setItem("godis", customerCandystring);
  } else {
    let getCurrentCandy :any = localStorage.getItem("godis");
    let currentCandy = JSON.parse(getCurrentCandy);
    currentCandy.push(godis);
    localStorage.setItem("godis", JSON.stringify(currentCandy));
  }

  // if (candyLS === null) {
  //   boughtCandy.push(godis);
  //   let customerCandystring = JSON.stringify(boughtCandy);
  //   localStorage.setItem("godis", customerCandystring);
  // } else {
  //   let getCurrentCandy :any= localStorage.getItem("candy");
  //   let currentCandy = JSON.parse(getCurrentCandy) || ("[]");
  //   currentCandy.push(godis);

  //   localStorage.setItem("godis", JSON.stringify(currentCandy));
  // }
  // boughtCandy.push(godis);
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
