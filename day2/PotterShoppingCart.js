class PotterShoppingCart {
  constructor() {
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
    let self  = this;
    let price = 0;

    while (self.books.length > 0) {
      let uniqueBooks = [];
      let restBooks   = [];

      let discountPrice = 0; 
      let count         = 0;

      //get unique books
      self.books.forEach((element, index, array) => {
        if (self.isUniqueBook(uniqueBooks, element)) {
          uniqueBooks.push(element);
          discountPrice += element.price;
        } else {
          restBooks.push(element);
        }
      });

      count  = uniqueBooks.length;
      price += discountPrice * self.discountRate[count];

      self.books = restBooks.slice(0);
    }

    return price;
  }

  isUniqueBook(uniqueBooks, book) {
    let ans = false;
    ans = uniqueBooks.some((element, index, array) => {
        return element.id === book.id;
    });
    
    return !ans;
  }
}

export default PotterShoppingCart;
