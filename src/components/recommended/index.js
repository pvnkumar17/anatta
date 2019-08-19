import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import ProdList from "../prod-list"
import { bindActionCreators } from "redux";
import * as api from "../../apiCalls";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './recommended.css';

class Recommended extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        api.getProducts()
        .then(products =>this.setState({products: products}))
    }

    render() {
        return(
            <div className="recommended">

                <div className="container-recom">
                    <h2>You'll also like</h2>
                    <div className="desktop-only">
                        <Carousel  showThumbs={false} showIndicators={false} centerMode centerSlidePercentage={25}>
                            {this.state.products.map((product, index) => 
                            <ProdList name={product.name} price={product.price} key={index} id={product.id} />
                            )}
                        </Carousel>
                    </div>
                    <ul className="mobile-only">
                        {this.state.products.map((product, index) => 
                            {if(index< 4) return <li key={index}><ProdList name={product.name} price={product.price} id={product.id}/></li>}
                        )}  
                    </ul>
                </div>
            </div>
        );
    }
}

Recommended.propTypes = {
    products: PropTypes.array
}

function mapStateToProps(state){
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadProducts: bindActionCreators(productActions.loadProducts, dispatch)
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);