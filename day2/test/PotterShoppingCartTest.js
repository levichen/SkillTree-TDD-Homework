const should = require('chai').should();

import Book from '../Book.js';
import PotterShoppingCart from '../PotterShoppingCart.js';

describe('Potter Shopping Cart Tests', () => {
  it('只買了第一集，其它都沒買，價何應為 100 * 1 = 100 元', () => {
    // arrange 
    var books = [new Book(1, 100)];

    let target = new PotterShoppingCart();
    target.setBooks(books);

    let expected = 100;

    //act
    let actual = target.getPrice();

    //assert
    actual.should.equal(expected);
  });

  it('第一集買了一本，第二集也買了一本，價格應為 100 * 2 * 0.95 = 190', () => {
    // arrange 
    var books = [
      new Book(1, 100),
      new Book(2, 100)
    ];

    let target = new PotterShoppingCart();
    target.setBooks(books);

    let expected = 190;

    //act
    let actual = target.getPrice();

    //assert
    actual.should.equal(expected);
  });
});
