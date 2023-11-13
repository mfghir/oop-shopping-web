class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }

  createCard(data) {
    const cardEle = document.createElement("div");

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.alt;

    cardEle.appendChild(img);

    const info = document.createElement("div");
    const productName = document.createElement("h3");
    const control = document.createElement("div");
    const price = document.createElement("span");
    const button = document.createElement("button");

    productName.innerText = data.name
    price.innerText = data.price
    button.innerText = "+";

    control.append(price,button);
    info.append(productName,control);

    cardEle.appendChild(info);
  }
}


export default Products;
