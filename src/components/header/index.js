import React, { PureComponent }from 'react';
import FeatureText from './feature-text/featuretext';
import Categories from './categories/categories';
import Brand from './brand/brand';
import About from './about/about';
import Profile from './profile/profile';
import Cart from './cart/cart';
import './header.css';

class Header extends PureComponent {
    state = {
        categories: ["men", "women"]
    }

    render(){

        return(
            <div className="header">
                <FeatureText />
                <div className="container-header">
                    <div className="hamburger"><span className="icon-hamburger" ></span></div>
                    <Categories categories={this.state.categories} />                    
                    <div className="right-align">
                        <About />
                        <Profile />
                        <Cart />
                    </div>
                    <Brand />
                </div>
            </div>
        )

    }
}

export default Header;