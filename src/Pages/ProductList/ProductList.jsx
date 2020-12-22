import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Option from './Components/Option';
import Product from './Components/Product';
import ProductListHeader from './Components/ProductListHeader';
import ProductSale from './Components/ProductSale';
import ProductSoldOut from './Components/ProductSoldOut';
import { FOOD_TYPE_VALUE, SORT_BY_VALUE } from './Data/ProudctListData';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      typeValue: '',
    };
  }

  componentDidMount() {
    const value = this.props.match.params.category;
    this.getProductList(value);
    this.props.history.push(`/products/${value}`);
  }

  componentDidUpdate(preProps, _) {
    const value = this.props.match.params.category;
    if (this.props.match.params.category !== preProps.match.params.category) {
      this.getProductList(value);
    }
  }

  getProductList = value => {
    fetch(`http://192.168.0.2:8000/products?name=${value}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res.products_list,
        });
      });
    this.setState({ typeValue: value });
  };

  filterSortBy = e => {
    const { value } = e.target;
    this.props.history.push(`${this.props.match.url}?sort_by=${value}`);
    switch (value) {
      case 'title-ascending':
        this.state.productList.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          return null;
        });
        break;
      case 'title-descending':
        this.state.productList.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          return null;
        });
        break;
      case 'price-ascending':
        this.state.productList.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          return null;
        });
        break;
      case 'price-descending':
        this.state.productList.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          return null;
        });
        break;
      default:
    }
  };

  filterFoodType = e => {
    const { value } = e.target;
    this.props.history.push(`/products/${value}`);
  };

  render() {
    const { typeValue, productList } = this.state;
    return (
      <main className="ProductList">
        <a href="#" className="alert">
          <p className="text">Not sure which food is right for your dog?</p>
        </a>
        {FOOD_TYPE_VALUE.map((item, idx) => {
          if (item.value === this.props.match.params.category) {
            return <ProductListHeader key={idx} item={item} />;
          }
          return null;
        })}
        <section className="filterBar">
          <div className="wrapping">
            <div className="columnResult">
              <h5>{productList.length} products</h5>
            </div>
            <div className="column">
              <select
                name="types"
                onChange={e => this.filterFoodType(e)}
                value={typeValue}
              >
                {FOOD_TYPE_VALUE.map((item, idx) => {
                  return <Option key={idx} item={item} />;
                })}
              </select>
              <select
                name="sort_by"
                onChange={e => {
                  this.filterSortBy(e);
                }}
              >
                {SORT_BY_VALUE.map((item, idx) => {
                  return <Option key={idx} item={item} />;
                })}
              </select>
            </div>
          </div>
        </section>
        <section className="collection">
          <li className="wrapping">
            {productList.map(product => {
              if (product.stock && !product.sale_rate) {
                return <Product key={product.id} product={product} />;
              } else if (product.sale_rate) {
                return <ProductSale key={product.id} product={product} />;
              } else if (!product.stock) {
                return <ProductSoldOut key={product.id} product={product} />;
              } else {
                return null;
              }
            })}
          </li>
        </section>
      </main>
    );
  }
}

export default withRouter(ProductList);
