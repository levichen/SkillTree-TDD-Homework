
class PotterShoppingCart {
  setBooks(books) {
    this.books = books; 
  }

  getPrice() {
    return this.books[0].price;
  }
}

export default PotterShoppingCart;
