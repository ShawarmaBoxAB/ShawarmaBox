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
  constructor(name, imgUrl, price,discountPrice = null, description, ingridients, category) {
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
let shawarmaBox = new Product("Shawarma Box", "/Media/images/shawarma-wrap.jpg", 119,null, "En krämig och smakfull shawarma låda med antigen pommes eller ris", ["Bröd", "Kyckling Shawarma", "Salt gurka", "Vitlökssås"], category.KlassiskaMenyer)
let kebabBox = new Product("Kebab Box", "/Media/images//kebab-meat.webp", 129,null, "En krämig och smakfull kebab låda med antigen pommes eller ris", ["Bröd", "Kebab", "Salt gurka", "Kebabsås"], category.KlassiskaMenyer)
let test = new Product("Kebab Box", "/Media/images/kebab-meat.webp", 129,null, "En krämig och smakfull kebab låda med antigen pommes eller ris", ["Bröd", "Kebab", "Salt gurka", "Kebabsås"], category.Mat)
let test2 = new Product("Kebab Box", "/Media/images/kebab-meat.webp", 129,null, "En krämig och smakfull kebab låda med antigen pommes eller ris", ["Bröd", "Kebab", "Salt gurka", "Kebabsås"],null)
let test3 = new Product("Kebab Box", "/Media/images/kebab-meat.webp", 129,null, "En krämig och smakfull kebab låda med antigen pommes eller ris", ["Bröd", "Kebab", "Salt gurka", "Kebabsås"], category.Mat)





let products = [shawarmaBox, kebabBox, test, test2, test3]

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
  if(productsHtmlString === "")
  {
    productsHtmlString += `<div class='info-wrapper'>
                <h1>Sidan är tom just nu:(</h1>
            </div`
  }
  document.querySelector(".product-card-wrapper").innerHTML += productsHtmlString
}
function DisplayDiscountedProducts()
{
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
  if(productsHtmlString === "")
  {
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