import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PRODUCT_DETAIL_API } from '../../../config';
import { PRODUCT_CART_API } from '../../../config';
import './ProductSection.scss';

class ProductSection extends Component {
  state = {
    count: 0,
    radioGroup: {
      1: false,
      2: false,
      3: false,
    },
    showProductDetail: false,
    showBenefits: false,
    showIngredients: false,
    products: [],
    price: 0,
    kg_value: '',
  };

  handlePrice = e => {
    const { value } = e.target;
    const { products } = this.state;
    switch (value) {
      case '1':
        this.setState({ price: products.price, kg_value: value });
        break;
      case '2':
        this.setState({
          price: products.price * 3,
          kg_value: value,
        });
        break;
      case '3':
        this.setState({
          price: products.price * 6,
          kg_value: value,
        });
        break;
      default:
    }
  };

  handleRadio = event => {
    let obj = {};
    obj[event.target.value] = event.target.checked; // true
    this.setState({ radioGroup: obj });
  };

  handleIncrease = () => {
    const count = this.state.count + 1;
    this.setState({ count: count < 20 ? count : 20 });
  };

  handleDecrease = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  componentDidMount = () => {
    const value = this.props.match.params.items;
    fetch(`${PRODUCT_DETAIL_API}/products/detail/${value}`)
      .then(res => res.json())
      .then(res => this.setState({ products: res.products_detail }));
  };

  goToCart = () => {
    const { products, count, kg_value } = this.state;
    fetch(`${PRODUCT_CART_API}/orders/cart`, {
      method: 'POST',
      body: JSON.stringify({
        // order_id: products.id,
        product_id: products.id,
        quantity: count,
        option_id: Number(kg_value),
        // payments_type_id: 1,
        // total_price: '',
      }),
    });
    this.props.history.push('/');
  };

  render() {
    const {
      products,
      showProductDetail,
      showBenefits,
      showIngredients,
      count,
      price,
      radioGroup,
    } = this.state;
    console.log(typeof this.state.kg_value);
    return (
      <section className="ProductDetail">
        <div className="productInfoContainer">
          <div className="productImg">
            "
            <img src={products.main_image} alt="mainImg" className="bigImg" />
            <div className="smallImgs">
              <img
                src={products.sub_image}
                alt="mainImg"
                className="smallImg"
              />
            </div>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <h2 className="contentsHeading">{products.category}</h2>
            <h1 className="infoTitle contentsTitle">{products.name}</h1>
            <span className="priceInfo contentsBody">{`${price.toLocaleString(
              'en-US',
              {
                style: 'currency',
                currency: 'EUR',
              }
            )}`}</span>
            <div className="selectorWraper">
              <div className={radioGroup['1'] ? 'active' : null}>
                <label For="id1">2kg</label>
                <input
                  type="radio"
                  checked={radioGroup['1']}
                  name="radioGroup"
                  value="1"
                  onChange={this.handleRadio}
                  onClick={this.handlePrice}
                ></input>
              </div>
              <div className={radioGroup['2'] ? 'active' : null}>
                <label For="id2">6kg</label>
                <input
                  type="radio"
                  checked={radioGroup['2']}
                  name="radioGroup"
                  value="2"
                  onChange={this.handleRadio}
                  onClick={this.handlePrice}
                ></input>
              </div>
              <div className={radioGroup['3'] ? 'active' : null}>
                <label For="id3">12kg</label>
                <input
                  type="radio"
                  checked={radioGroup['3']}
                  name="radioGroup"
                  value="3"
                  onChange={this.handleRadio}
                  onClick={this.handlePrice}
                ></input>
              </div>
            </div>
            <div className="quantitySelector">
              <button onClick={this.handleDecrease} className="minusBtn">
                -
              </button>
              <span>{count}</span>
              <button onClick={this.handleIncrease} className="plusBtn">
                +
              </button>
            </div>
            <button className="addBtn" onClick={this.goToCart}>
              ADD TO CART
            </button>
            <div className="productAccordian">
              <div className="productAccordianUnit">
                <div className="productAccordianHeader contentsBody">
                  Product description
                </div>
                <button
                  onClick={e => {
                    this.setState({
                      showProductDetail: !showProductDetail,
                    });
                  }}
                >
                  {showProductDetail ? '-' : '+'}
                </button>
              </div>
              {showProductDetail && (
                <div className="hide-contents contentsBody">
                  {products.description}
                </div>
              )}
              <div className="productAccordianUnit">
                <div className="productAccordianHeader contentsBody">
                  Benefits
                </div>

                <button
                  onClick={e => {
                    this.setState({ showBenefits: !showBenefits });
                  }}
                >
                  {showBenefits ? '-' : '+'}
                </button>
              </div>
              {showBenefits && (
                <div className="hide-contents contentsBody">
                  {products.benefits}
                </div>
              )}
              <div className="productAccordianUnit">
                <div className="productAccordianHeader contentsBody">
                  Ingredients
                </div>
                <button
                  onClick={e => {
                    this.setState({
                      showIngredients: !showIngredients,
                    });
                  }}
                >
                  {showIngredients ? '-' : '+'}
                </button>
              </div>
              {showIngredients && (
                <div className="hide-contents contentsBody">
                  {products.ingredients}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(ProductSection);
