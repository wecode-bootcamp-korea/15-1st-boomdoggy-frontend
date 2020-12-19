import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Option from './Components/Option';
import Product from './Components/Product';
import ProductSale from './Components/ProductSale';
import ProductSoldOut from './Components/ProductSoldOut';
import './ProductList.scss';

const FOOD_TYPE_VALUE = [
  { value: 'adult-food', text: 'Adult Food' },
  { value: 'light-food', text: 'Adult Light Food' },
  { value: 'our-food', text: 'Our Food' },
  { value: 'our-treats', text: 'Our Treats' },
  { value: 'puppy-food', text: 'Puppy Food' },
  { value: 'super-food', text: 'Super Food' },
];

const SORT_BY_VALUE = [
  { value: 'best-selling', text: 'Best Selling' },
  { value: 'title-ascending', text: 'Title Ascending' },
  { value: 'title-descending', text: 'Title Descending' },
  { value: 'price-ascending', text: 'Price Ascending' },
  { value: 'price-descending', text: 'Price Descending' },
];

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: {},
      filterData: [],
      typeValue: '',
    };
  }

  componentDidMount() {
    const value = this.props.match.params.category;
    fetch(`http://localhost:3000/data/productList.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res,
        });
        this.setFilterData(value);
      });
    this.setState({ typeValue: value });
    this.props.history.push(`/products/${value}`);
  }

  componentDidUpdate(preProps, _) {
    const value = this.props.match.params.category;
    if (this.props.match.params.category !== preProps.match.params.category) {
      this.setFilterData(value);
      this.setState({ typeValue: value });
    }
  }

  setFilterData = value => {
    const { productList } = this.state;
    switch (value) {
      case 'adult-food':
        this.setState({
          filterData: productList.adultFood,
        });
        break;
      case 'light-food':
        this.setState({
          filterData: productList.lightFood,
        });
        break;
      case 'our-food':
        this.setState({
          filterData: productList.ourFood,
        });
        break;
      case 'our-treats':
        this.setState({
          filterData: productList.ourTreats,
        });
        break;
      case 'puppy-food':
        this.setState({
          filterData: productList.puppyFood,
        });
        break;
      case 'super-food':
        this.setState({
          filterData: productList.superFood,
        });
        break;
      default:
    }
  };

  filterSortBy = e => {
    const { value } = e.target;
    this.props.history.push(`${this.props.match.url}?sort_by=${value}`);
    switch (value) {
      case 'title-ascending':
        this.state.filterData.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          return null;
        });
        break;
      case 'title-descending':
        this.state.filterData.sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          }
          return null;
        });
        break;
      case 'price-ascending':
        this.state.filterData.sort((a, b) => {
          const aPrice = Number(a.price.slice(1));
          const bPrice = Number(b.price.slice(1));
          if (aPrice < bPrice) {
            return -1;
          }
          return null;
        });
        break;
      case 'price-descending':
        this.state.filterData.sort((a, b) => {
          const aPrice = Number(a.price.slice(1));
          const bPrice = Number(b.price.slice(1));
          if (aPrice > bPrice) {
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
    const { filterData, typeValue } = this.state;
    return (
      <main className="ProductList">
        <a href="#" className="alert">
          <p className="text">Not sure which food is right for your dog?</p>
        </a>
        <section className="filterBar">
          <div className="wrapping">
            <div className="columnResult">
              <h5>{filterData.length} products</h5>
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
            {filterData.map(product => {
              if (product.stock && !product.salePrice) {
                return <Product key={product.id} product={product} />;
              } else if (product.salePrice) {
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
