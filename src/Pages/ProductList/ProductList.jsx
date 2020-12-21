import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Option from './Components/Option';
import Product from './Components/Product';
import ProductListHeader from './Components/ProductListHeader';
import ProductSale from './Components/ProductSale';
import ProductSoldOut from './Components/ProductSoldOut';
import './ProductList.scss';

const FOOD_TYPE_VALUE = [
  {
    value: 'adult-food',
    text: 'Adult Food',
    contentsBody:
      'The Boop® journey begins with our trusted farms and fisheries. Then Boop® technology cooks the meat at a gentle 90c temperature keeping in the freshness and protecting protein. This makes our food highly digestible, higher in nutrients & we promise your dog will smell the difference.',
    imgUrl: '/images/dogAdult.jpg',
  },
  {
    value: 'light-food',
    text: 'Adult Light Food',
    contentsBody:
      'Our light recipes have added L-Carnitine—an amino acid that promotes the conversion of fat to muscle for lean muscle development. L-Carnitine has other added benefits which include helping to enhance brain function, reducing muscle damage, and regulating blood sugar levels.',
    imgUrl: '/images/dogLight.jpg',
  },
  {
    value: 'our-food',
    text: 'Our Food',
    contentsBody:
      'The Boop® journey begins with our trusted farms and fisheries. Then Boop® technology cooks our meat at a gentle 90c temperature, keeping in the freshness and protecting protein. This makes our food highly digestible, higher in nutrients & we promise your dog will smell the difference.',
    imgUrl: '/images/dogOurFood.jpg',
  },
  {
    value: 'our-treats',
    text: 'Our Treats',
    contentsBody:
      'The Boop® journey begins with our trusted farms and fisheries. Then Boop® technology cooks our meat at a gentle 90c temperature, keeping in the freshness and protecting protein. This makes our food highly digestible, higher in nutrients & we promise your dog will smell the difference.',
    imgUrl: '/images/dogOurTreats.jpg',
  },
  {
    value: 'puppy-food',
    text: 'Puppy Food',
    contentsBody:
      'All our puppy food is multi-protein source kibble, which means they are less likely to develop a sensitivity or intolerance to other protein sources in their adult years. Our Puppy Salmon flavour is bursting with naturally high levels of Omega 3, which is crucial for skin and coat development.',
    imgUrl: '/images/dogPuppy.jpg',
  },
  {
    value: 'super-food',
    text: 'Super Food',
    contentsBody:
      'Our Superfoods were specifically selected for each recipe based on their high nutrient content. Formulated without Peas and White Potato for super sensitive dogs. Highly digestible with a Natural source of Collagen.',
    imgUrl: '/images/dogSuper.jpg',
  },
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
        {FOOD_TYPE_VALUE.map(item => {
          if (item.value === this.props.match.params.category) {
            return <ProductListHeader item={item} />;
          }
          return null;
        })}
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
