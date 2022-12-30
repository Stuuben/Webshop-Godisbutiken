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
  "../assets/fizzybubbliz.png",
  "Fizzy Bubblizz är en rosa och blå flaska med en mjuk konsistens och har en smak av bubbelgum."
);
let peanutSquare = new Candy(
  "Jordnötsruta",
  5,
  "Choklad",
  "http://localhost:1234/jordnotsruta.0741e7ef.png",
  "Knapriga jordnötskross i mörk choklad."
);
let punsch = new Candy(
  "Punschpralin",
  4.5,
  "Choklad",
  "/punschpraliner.9409834c.jpeg",
  " Den härliga pralinen har smak av arrak och rom, har ett överdrag av smakrik choklad och är toppad med sockerpärlor."
);
let sourNapps = new Candy(
  "Sura Nappar",
  5,
  "Sur",
  "/suranappar.2ab93ae2.jpg",
  "Sursockrad gelé med colasmak"
);
let geisha = new Candy(
  "Geisha",
  8,
  "Choklad",
  "/geisha.39b044ab.jpg",
  "Mjölkchoklad med krispig nötnougat"
);
let ferrari = new Candy(
  "Ferrari",
  5,
  "Hallon",
  "/ferrari.4eefc7a1.png",
  "Röda sega godisar med smak av hallon. Den är formad efter en ferraribil och har en söt smak."
);
let marabou = new Candy(
  "Marabou",
  8,
  "Choklad",
  "/marabou.f77e3111.png",
  "Marabou mjölkchoklad är Sveriges allra mest älskade choklad. Det smidiga mini-formatet gör att det blir lätt att ta med."
);
let rassberrySkull = new Candy(
  "Hallonlakritsskalle",
  5.5,
  "Hallon",
  "/hallonlakrits.64cd7f44.png",
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
