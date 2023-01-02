// console.log("hej");

export class Candy {
  name: string;
  price: number;
  type: string;
  img: string;
  desc: string;

  constructor(
    name: string,
    price: number,
    type: string,
    img: string,
    desc: string
  ) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.img = img;
    this.desc = desc;
  }
}

export class CandyInCart extends Candy {
  amount: number;

  constructor(
    name: string,
    price: number,
    type: string,
    img: string,
    desc: string,
    amount: number
  ) {
    super(name, price, type, img, desc);
    this.amount = amount;
  }
}

let fizzyBubliz = new Candy(
  "Fizzy Bubliz",
  6,
  "Sur",
  "https://i1.wp.com/segagubben.se/wp-content/uploads/2018/09/fizzy-pop-losgodis-sega-gubben.jpg?fit=709%2C472&ssl=1",
  "Fizzy Bubblizz är en rosa och blå flaska med en mjuk konsistens och har en smak av bubbelgum."
);
let peanutSquare = new Candy(
  "Jordnötsruta",
  5,
  "Choklad",
  "https://i2.wp.com/segagubben.se/wp-content/uploads/2018/09/jordnotsruta-losgodis-sega-gubben.jpg?fit=208%2C172&ssl=1",
  "Knapriga jordnötskross i mörk choklad."
);
let punsch = new Candy(
  "Punschpralin",
  4.5,
  "Choklad",
  "https://www.happycandy.se/images/zoom/punschpraliner.png",
  " Den härliga pralinen har smak av arrak och rom, har ett överdrag av smakrik choklad och är toppad med sockerpärlor."
);
let sourNapps = new Candy(
  "Sura Nappar",
  5,
  "Sur",
  "https://swedishfoodshop.com/pub/media/catalog/product/cache/577ee1db3aa78a031ff4355fb63b3264/s/u/suracolanappjpg.jpg",
  "Sursockrad gelé med colasmak"
);
let geisha = new Candy(
  "Geisha",
  8,
  "Choklad",
  "https://swedishfoodshop.com/pub/media/catalog/product/cache/577ee1db3aa78a031ff4355fb63b3264/g/e/geisha_4.jpg",
  "Mjölkchoklad med krispig nötnougat"
);
let ferrari = new Candy(
  "Ferrari",
  5,
  "Hallon",
  "https://swedishfoodshop.com/pub/media/catalog/product/cache/577ee1db3aa78a031ff4355fb63b3264/l/o/losviktgodis.ferrari.jpg",
  "Röda sega godisar med smak av hallon. Den är formad efter en ferraribil och har en söt smak."
);
let marabou = new Candy(
  "Marabou",
  8,
  "Choklad",
  "https://quickbutik.imgix.net/23396w/products/5fd8ff9a2e97e.jpeg",
  "Marabou mjölkchoklad är Sveriges allra mest älskade choklad. Det smidiga mini-formatet gör att det blir lätt att ta med."
);
let rassberrySkull = new Candy(
  "Hallonlakritsskalle",
  5.5,
  "Hallon",
  "https://bubs.se/wp-content/uploads/2021/08/Hallon_Lakritsskalle.png",
  "Den är en söt och salt dröm med en spännande form."
);

export let candys: Candy[] = [
  fizzyBubliz,
  peanutSquare,
  punsch,
  sourNapps,
  geisha,
  ferrari,
  marabou,
  rassberrySkull,
];

console.log("hej");