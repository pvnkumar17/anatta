import React from 'react';
import './pdp-description.css';
import Rating from '../rating';
import * as api from "../../apiCalls";

const prodSize = Array(17).fill().map((_, index) => 5 + index / 2);

//const unavailableSize = prodSize.filter(() => Math.random() > 0.5);
const unavailableSize = [6, 7.5, 8.5, 9, 9.5, 11, 12.5];

const ChooseColor = [
    {name: 'Black', code: '#000000'},
    {name: 'Red', code: '#990000'},
    {name: 'Green', code: '#009900'},
    {name: 'Gray', code: '#c8c8c8'},
    {name: 'Yellow', code: '#999900'},
    {name: 'Blue', code: '#000099'},
    {name: 'Cyan', code: '#009999'}
];

class PdpDescription extends React.Component {
  state = {
      genders : ['MEN', 'WOMEN'],
      gender: 0,
      item: {},
      size: prodSize.find(size => !unavailableSize.includes(size)),
      color: 0,
    }

  selectColor = (color) => {
    this.setState({color})
  }

  selectGender = (gender) => {
    this.setState({gender})
  }

  selectSize = (size) => {
    this.setState({size})
  }

  componentDidMount() {
    api.getProduct(8).then(product => 
        this.setState({item: product})
    )
}

  render() {
    const {item} = this.state;
    return (
      <div className="description">
        <div className='product-desc'>
          <div className='product-desc-top'>
            <span className='name'>
              {item.name}
            </span>
            <span className='price'>
              ${item.price} USD
            </span>
          </div>
          <div className='product-desc-bottom'>
            <span>
              {item.description}
            </span>
            <span>
              <Rating max={5} reviews={154} rating={4} />
            </span>
          </div>
        </div>
        <div className='gender-container'>
          {
            this.state.genders.map((gender, index) => (
              <div key={gender} onClick={() => this.selectGender(index)} className={`genders ${index===this.state.gender && 'selected'}`}>{gender}</div>
            ))
          }
        </div>
        <div className='size-color'>
          <div className='size-color-top'>
            <div className='colors-title'>SELECT COLOR</div>
            <div className='colors'>
              {
                ChooseColor.map((color, index) => (
                  <div key={index} onClick={() => this.selectColor(index)} className={`color ${this.state.color === index && 'selected'}`} style={{backgroundColor: color.code}}>
                  </div>
                ))
              }
            </div>
          </div>
          <br/>
          <div className='size-select'>
            <div className='size-title'>
              SELECT SIZE
              <div className='size-tips'>
                <p className='size-tips-title'>
                  Size & Fit Guide
                </p>
              </div>
            </div>
            <div className='prod-size'>
              {
                prodSize.map((size, index) => (
                  <div key={size} onClick={() => !unavailableSize.includes(size) && this.selectSize(size)} className={`size-list ${this.state.size === size && 'selected'} ${unavailableSize.includes(size) && 'unavilable'}`}>
                    {size}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='add-to-bag'>
          ADD TO BAG
        </div>
        <div className='shipping-adv'>
          Worldwide Shipping + Free Returns
        </div>
      </div>
    )
  }
}

export default PdpDescription;