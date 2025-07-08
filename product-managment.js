class Product {
  /**
 * @param {string} name
 * @param {string} imgUrl
 * @param {number} price
 * @param {number} discountPrice
 * @param {string} description
 * @param {string[]} ingridients
 * @param {category} category
 * 
 */
  constructor(name, imgUrl, price, discountPrice = null, description, ingridients, category) {
    this.name = name
    this.imgUrl = imgUrl
    this.price = price
    this.description = description
    this.ingridients = ingridients
    this.category = category
    this.discountPrice = discountPrice
  }
}

class category {
  static KlassiskaMenyer = class { };
  static Drycker = class { };
  static Mat = class { };
}
let shawarmaBox = new Product(
  "Shawarma Box",
  "/Media/images/products/shawarma-box.png",
  119,
  null,
  "En krämig och smakrik shawarma låda som består av en shawarma rulle uppskuren i bitar med pommes och 3 såser som ingår, Såserna är Mohammara,vitlökssås och Coleslaw. Det ingår även mixade pickles.",
  ["Bröd", "Kyckling Shawarma", "Salt gurka", "Vitlökssås"],
  category.KlassiskaMenyer
)
let kycklingBox = new Product(
  "Kyckling Box",
  "/Media/images/products/Kyckling-tallrik.png",
  129,
  null,
  "En fantastisk och smakrik shawarma låda med pommes och 3 såser som ingår, Såserna är Mohammara,vitlökssås och Coleslaw. Det ingår även mixade pickles.",
  ["Kyckling Shawarma", "Salt gurka", "Vitlökssås"],
  category.KlassiskaMenyer
)
let kebabBox = new Product(
  "Kebab Box",
  "/Media/images/products/kebab-tallrik.png",
  139,
  null,
  "En krämig och smakrik kebab låda med pommes och 3 såser som ingår, Såserna är Mohammara,Kebabsås och Coleslaw",
  ["Kebab", "Tomat", "Gurka", "rödlök", "fefferoni", "Sallad", "Kebabsås"],
  category.KlassiskaMenyer
)
let grillMixBox = new Product("GrillMix Box",
  "/Media/images/products/grillmix-tallrik.png",
  149,
  null,
  "En låda med kolgrillad lamm och kyckling med pommes och 3 såser som ingår, Såserna är Hummus,Vitlökssås och Coleslaw. Det ingår även mixade pickles. Måltiden innehåller två spett som du kan välja, (lamm eller kyckling) eller en av varje till.",
  ["Kebab spett", "Tawooq spett", "Salt gurka", "Kebabsås"],
  category.KlassiskaMenyer
)
let falaffelBox = new Product(
  "Falaffel Box",
  "/Media/images/products/falaffel-tallrik.png",
  99,
  null,
  "En god falaffel låda med pommes som ett vegetariskt alternativ, passar bra för dig som vill äta gott,miljövänligt och prisvärdigt.",
  ["9x Falaffel bitar", "Tomat", "Gurka", "Salt gurka", "Sallad", "Tahini sås"],
  category.KlassiskaMenyer
)
let korvBox = new Product(
  "Korv Box",
  "/Media/images/products/korv-tallrik.png",
  49,
  null,
  "En enkel och snabb korv låda med pommes. Du får 2 korvar med pommes, Du kan välja till senap och ketchup . Enkelt och snabbt :)",
  ["2x Korvar", "Senap", "Ketchup"],
  category.KlassiskaMenyer
)

let shawarmaRulle = new Product(
  "Shawarma rulle",
  "/Media/images/products/shawarma-rulle.png",
  79,
  null,
  "En krämig och smakrik shawarma rulle. Finns inte mer att säga, smaken säger allt.",
  ["Bröd", "Kyckling Shawarma", "Salt gurka", "Vitlökssås"],
  category.Mat
);

let shishTawookRulle = new Product(
  "Shish tawook rulle",
  "/Media/images/products/kycklingspett.png",
  79,
  null,
  "En saftig kycklingrulle med grillad kyckling (tawook), pickles och vitlökssås.",
  ["Bröd", "Grillad kyckling", "Salt gurka", "Vitlökssås"],
  category.Mat
);

let shishKebabRulle = new Product(
  "Shish kebab rulle",
  "/Media/images/products/lammspett.png",
  89,
  null,
  "Kolgrillad shish kebab i bröd med grönsaker och kebabsås.",
  ["Bröd", "Shish kebab", "Tomat", "Lök"],
  category.Mat
);

let kebabRulle = new Product(
  "Kebab Rulle",
  "/Media/images/products//kebabrulle.png",
  89,
  null,
  "En klassisk kebabrulle med kebabkött, färska grönsaker och sås.",
  ["Bröd", "Kebabkött", "Tomat", "Sallad", "Rödlök", "Kebabsås"],
  category.Mat
);

let falafelRulle = new Product(
  "Falafel Rulle",
  "/Media/images/products/falffelrulle.png",
  59,
  null,
  "Vegetarisk falafelrulle med grönsaker och tahinisås.",
  ["Bröd", "Falafel", "Tomat","gurka", "Salt gurka", "Sallad", "Tahinisås"],
  category.Mat
);

let pommesLada = new Product(
  "Pommes låda",
  "/Media/images/products/pommes-lada.png",
  39,
  null,
  "Krispiga gyllene pommes frites i låda. Passar till allt.",
  ["Pommes frites", "Salt"],
  category.Mat
);

let korvMedBrod = new Product(
  "Korv med bröd",
  "/Media/images/products/korv-med-brod.jpg",
  15,
  null,
  "En klassiker - grillad korv i bröd. Välj mellan eller ketchup och senap.",
  ["Bröd", "Korv", "Ketchup", "Senap"],
  category.Mat
);



let cola = new Product(
  "Coca cola",
  "/Media/images/products/coca-cola.png",
  20,
  null,
  "",
  ["Coca cola"]
  , category.Drycker
)
let colaZero = new Product(
  "Coca cola zero",
  "/Media/images/products/Coca_cola_zero_330ml-removebg-preview.webp",
  20,
  null,
  "",
  ["Coca cola zero"]
  , category.Drycker
)
let slush = new Product(
  "Slush",
  "/Media/images/products/slush.webp",
  40,
  null,
  "Slush med 3 smaker som finns att välja och blanda mellan. Smakerna byts ofta efter frågan :)",
  ["Slush"]
  , category.Drycker
)
let fanta = new Product(
  "Fanta",
  "/Media/images/products/fanta-orange.png",
  20,
  null,
  "",
  ["Fanta"]
  , category.Drycker
)
let Fantaexotic = new Product(
  "Fanta exotic",
  "/Media/images/products/fanta-exotic.png",
  20,
  null,
  "",
  ["Fanta exotic"]
  , category.Drycker
)
let spriteZero = new Product(
  "Sprite zero",
  "/Media/images/products/sprite-zero.png",
  20,
  null,
  "",
  ["Sprite zero"]
  , category.Drycker
)
let BonaquaNaturell = new Product(
  "Bonaqua Naturell",
  "/Media/images/products/bonaqua-naturell.png",
  20,
  null,
  "",
  ["Bonaqua Naturell"]
  , category.Drycker
)
let BonaquaCitron = new Product(
  "Bonaqua Citron",
  "/Media/images/products/bonaqua-citron.png",
  20,
  null,
  "",
  ["Bonaqua Citron"]
  , category.Drycker
)
let Ayran = new Product(
  "Ayran",
  "/Media/images/products/ayran.png",
  20,
  null,
  "",
  ["Ayran"]
  , category.Drycker
)
let MerJuiceParon = new Product(
  "Mer Päron",
  "/Media/images/products/mer-paron.png",
  20,
  null,
  "",
  ["Mer Juice Päron"]
  , category.Drycker
)
let MerJuiceJordgubb = new Product(
  "Mer Jordgubb",
  "/Media/images/products/mer-jordgubb.png",
  20,
  null,
  "",
  ["Mer Juice Jordgubb"]
  , category.Drycker
)
let MerJuiceApelsin = new Product(
  "Mer Apelsin",
  "/Media/images/products/mer-apelsin.png",
  20,
  null,
  "",
  ["Mer Juice Apelsin"]
  , category.Drycker
)







let products = [shawarmaBox,
  kebabBox,
  kycklingBox,
  grillMixBox,
  falaffelBox,
  korvBox,
  shawarmaRulle,
  shishTawookRulle,
  kebabRulle,
  shishKebabRulle,
  falafelRulle,
  korvMedBrod,
  pommesLada,
  cola,
  colaZero,
  slush,
  fanta,
  Fantaexotic,
  spriteZero,
  BonaquaCitron,
  BonaquaNaturell,
  Ayran,
  MerJuiceJordgubb,
  MerJuiceParon,
  MerJuiceApelsin]

function DisplayAllProducts() {
  let productsHtmlString = ""
  for (let i = 0; i < products.length; i++) {
    productsHtmlString += `<div id="${i}" class="product-card animate-in">
        <img src="${products[i].imgUrl}" alt="${products[i].name}"/>
        <h1>${products[i].name}</h1>
        <h2 class="product-card-price">${products[i].price}kr</h2>
        <p class="see-more">
          Se mer
        </p>
      </div>`
  }
  document.querySelector(".product-card-wrapper").innerHTML += productsHtmlString
}
function DisplayProductById(productId) {
  document.querySelector("main").innerHTML += `
  <div class="product">
    <div class="info-wrapper">
      <div class="basic">
        <h1>${products[productId].name}</h1>
        <img src="${products[productId].imgUrl}" alt="${products[productId].name}" />
      </div>
      <div class="details">
        <div class="detail">
          <h2>Pris</h2>
          <p>${products[productId].price}kr</p>
        </div>
        <div class="detail">
          <h2>beskrivning</h2>
          <p>${products[productId].description}</p>
        </div>
        <div class="detail">
          <h2>Ingridienser</h2>
          <ul class="ingridients-list">
            ${products[productId].ingridients
      .map(ingridient => `<li class="ingridient">${ingridient}</li>`)
      .join("")}
          </ul>
        </div>
      </div>
    </div>
  </div>
`;
}
function DisplayProductsByCategory(category) {
  let productsHtmlString = ""
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == category) {
      productsHtmlString += `<div id="${i}" class="product-card animate-in">
        <img src="${products[i].imgUrl}" alt="${products[i].name}"/>
        <h1>${products[i].name}</h1>
        <h2 class="product-card-price">${products[i].price}kr</h2>
        <p class="see-more">
          Se mer
        </p>
      </div>`
    }
  }
  if (productsHtmlString === "") {
    productsHtmlString += `<div class='info-wrapper'>
                <h1>Sidan är tom just nu:(</h1>
            </div`
  }
  document.querySelector(".product-card-wrapper").innerHTML += productsHtmlString
}
function DisplayDiscountedProducts() {
  let productsHtmlString = ""
  for (let i = 0; i < products.length; i++) {
    if (products[i].discountPrice != null) {
      productsHtmlString += `
      <div id="${i}" class="product-card animate-in">
                <img src="${products[i].imgUrl}" alt="${products[i].name}">
                <h1>${products[i].name}</h1>
                <div class="product-card-Discount-price-wrapper">
                    <h2 class="product-card-price new-price">${products[i].price}kr</h2>
                    <h2 class="product-card-price old-price">${products[i].discountPrice}kr</h2>
                </div>
                <p class="see-more">
                    Se mer
                </p>
            </div>
            `
    }
  }
  if (productsHtmlString === "") {
    productsHtmlString += `<div class='info-wrapper'>
                <h1>Sidan är tom just nu:(</h1>
            </div`
  }
  document.querySelector(".product-card-wrapper").innerHTML += productsHtmlString

}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("vara-matratter")) {
    DisplayAllProducts();
  }
  else if (window.location.pathname.includes("klassiska-menyer")) {
    DisplayProductsByCategory(category.KlassiskaMenyer)
  }
  else if (window.location.pathname.includes("mat")) {
    DisplayProductsByCategory(category.Mat)
  }
  else if (window.location.pathname.includes("drycker")) {
    DisplayProductsByCategory(category.Drycker)
  }
  else if (window.location.pathname.includes("lunch-rabatt")) {
    DisplayDiscountedProducts();
  }
  else if (window.location.pathname.includes("product")) {
    DisplayProductById(localStorage.getItem("productId"))
  }
  document.querySelectorAll(".product-card").forEach(productCard => {
    productCard.addEventListener("click", () => {

      localStorage.setItem("productId", productCard.getAttribute("id"))
      window.location = "/product.html"
    })

  });
})