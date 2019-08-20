import React from "react";
import { connect } from "react-redux";
import PdpDescription from "./pdp-description";
import * as productActions from "../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as api from "../apiCalls";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './pdp.css';

class PDP extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        api.getProductDetails(8).then(products => 
            this.setState({products: products})
        )
    }

    render() {
        return (
            <div className="product-detail">
                <div className="col-right">
                    <Carousel showIndicators={false} >
                        {this.state.products && this.state.products.map((product, index) => <div className="container-img" key={index}><img src={product.url} /></div>)}
                    </Carousel>
                </div>
                <div className="col-left">
                    <PdpDescription id={8} />
                </div>

            </div>
        );
    }
}

PDP.propTypes = {
    products: PropTypes.array
}

function mapStateToProps(state){
    return {
        producta: state.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadProducts: bindActionCreators(productActions.loadProducts, dispatch)
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PDP);