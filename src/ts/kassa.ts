import { candys } from "./main";

let container = document.getElementById("checkout__container") as HTMLDivElement;

for(let i = 0; i < candys.length; i++) {
    console.log(candys[i]);

    let div = document.createElement("div") as HTMLDivElement;
    div.classList.add("checkout");

    let img = document.createElement("img") as HTMLImageElement;
    img.src = candys[i].img;
    img.classList.add("checkout__img");

    let info = document.createElement("div") as HTMLDivElement;
    info.classList.add("checkout__info");

    let pTag = document.createElement("p") as HTMLParagraphElement;
    pTag.innerHTML = candys[i].name;
    pTag.classList.add("candy");

    let pricetag = document.createElement("p") as HTMLParagraphElement;
    pricetag.innerHTML = String(`Pris: ${candys[i].price} kr`);
    pricetag.classList.add("price");

    div.appendChild(img);
    div.appendChild(info);
    info.appendChild(pTag);
    info.appendChild(pricetag);
    container.appendChild(div);
}
