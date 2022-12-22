import { candys } from "./main";

let container = document.getElementById("main") as HTMLDivElement;

console.log(candys);

for (let i = 0; i < candys.length; i++) {
  console.log(candys[i]);

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
    handleClick(candys[i])
  });

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(pTag);
  div.appendChild(buyBtn);
  container.appendChild(div);
}

function handleClick(godis) {
  console.log("klickad", godis);
}
