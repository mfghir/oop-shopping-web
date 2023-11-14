class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = [];

    this.toShow = [];
  }

  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createdCard(product, qty);
    });
  }

  createdCard(data, qty) {}

}
export default Cart;
