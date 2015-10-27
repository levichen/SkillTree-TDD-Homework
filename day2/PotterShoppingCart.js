

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
    let self = this;

    let price = 0;
    let eachBookQTY = this.getEachBookQTYList();

    while(true) {
      let count         = 0;
      let disCountPrice = 0;

      eachBookQTY.forEach((element, index, array) => {
        if (element > 0) {
          count += 1;
        } 
      });

      if (count === 0) break;

      self.books.forEach((element, index, array) => {
        if (eachBookQTY[element.id] > 0) {
          disCountPrice += element.price;
          eachBookQTY[element.id] -= 1;
        }  
      });

      console.log(eachBookQTY + ":" + disCountPrice + ":" + count + ":" + (disCountPrice * self.discountRate[count]));

      price += disCountPrice * self.discountRate[count];

      /*eachBookQTY = eachBookQTY.map((element) => {
        if (element === 0) {
          return 0;
        } else {
          return element - 1;
        }
      });*/
    }

       /*Count total price 
    price += self.books.reduce((previousBook, currentBook) => {
      return previousBook.price + currentBook.price;
    });*/

    return price;
  }

  getEachBookQTYList() {
    let eachBookQTY = [];

    this.books.forEach((element, index, array) => {
      let id = element.id;

      if (eachBookQTY[id] === undefined) {
        eachBookQTY[id] = 1;
      } else {
        eachBookQTY[id] += 1;
      }
    });

    return eachBookQTY;
  }
}

export default PotterShoppingCart;
