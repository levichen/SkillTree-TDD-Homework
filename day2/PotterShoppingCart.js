

class PotterShoppingCart {
  constructor() {
    this.eachBookQTY = [];
    this.discountRate = {
      1 : 1, 
      2 : 0.95,
      3 : 0.9,
      4 : 0.8,
      5 : 0.75
    }
  }

  setBooks(books) {
    this.books = books; 
  }

  getPrice() {
    let count = 0;
    let price = 0;

    count  = this.books.length; 
    price += this.books.reduce((previousBook, currentBook) => {
      return previousBook.price + currentBook.price;
    });

    return this.discountRate[count] * count * 100;
  }

}

export default PotterShoppingCart;
