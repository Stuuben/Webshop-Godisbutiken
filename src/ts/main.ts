console.log("hej");

export class Candy {
  name: string;
  price?: number;
  type: string;
  img: string;
  constructor(name: string, price: number, type: string, img: string) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.img = img;
  }
}

let fizzyBubliz = new Candy(
  "Fizzy Bubliz",
  6,
  "Sur",
  "/fizzybubbliz.2140eb84.png"
);
let peanutSquare = new Candy(
  "Jordnötsruta",
  5,
  "Choklad",
  "/jordnotsruta.0741e7ef.png"
);
let punsch = new Candy(
  "Punschpralin",
  4.5,
  "Choklad",
  "/punschpraliner.9409834c.jpeg"
);
let sourNapps = new Candy("Sura Nappar", 5, "Sur", "/suranappar.2ab93ae2.jpg");
let geisha = new Candy("Geisha", 8, "Choklad", "/geisha.39b044ab.jpg");
let ferrari = new Candy("Ferrari", 5, "Hallon", "/ferrari.4eefc7a1.png");
let marabou = new Candy("Marabou", 8, "Choklad", "/marabou.f77e3111.png");
let rassberrySkull = new Candy(
  "Hallonlakritsskalle",
  5.5,
  "Hallon",
  "/hallonlakrits.64cd7f44.png"
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
<<<<<<< HEAD


=======
console.log(candys);
>>>>>>> 696dbfef9559130e4bf80f315a59dc7167d27a3e
