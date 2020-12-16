import React, { Component } from 'react';
import Product from './Components/Product';
import ProductSale from './Components/ProductSale';
import ProductSoldOut from './Components/ProductSoldOut';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productList.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ productList: res.productList });
      });
  }

  render() {
    const productList = this.state.productList;
    return (
      <main className="Product__list">
        <a href="#" className="alert">
          <p className="text">Not sure which food is right for your dog?</p>
        </a>
        <section className="filter-bar">
          <div className="wrapping">
            <div className="column-result">
              <h5>10 products</h5>
            </div>
            <div className="column">
              <select name="types">
                <option value="adult-food">Adult Food</option>
                <option value="light-food">Adult Light Food</option>
                <option value="our-food">Our Food</option>
                <option value="our-treats">Our Treats</option>
                <option value="puppy-food">Puppy Food</option>
                <option value="super-food">Super Food</option>
              </select>
              <select name="sort_by">
                <option value="best-selling">Best Selling</option>
                <option value="manual">Featured</option>
                <option value="title-ascending">Title Ascending</option>
                <option value="title-descending">Title Descending</option>
                <option value="price-ascending">Price Ascending</option>
                <option value="price-descending">Price Descending</option>
              </select>
            </div>
          </div>
        </section>
        <section className="collection">
          <li className="wrapping">
            {productList.map((product, idx) => {
              if (product.stock && !product.salePrice) {
                return <Product key={idx} product={product} />;
              } else if (product.salePrice) {
                return <ProductSale key={idx} product={product} />;
              } else if (!product.stock) {
                return <ProductSoldOut key={idx} product={product} />;
              }
            })}
          </li>
        </section>
      </main>
    );
  }
}

export default ProductList;
