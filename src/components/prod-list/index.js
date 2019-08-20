import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as api from "../../apiCalls";
import './prodlist.css';

class ProdList extends React.Component {
    state = {
        imageUrl: ""
    }

    componentDidMount() {
        api.getProductDetails(this.props.id).then(products => 
            this.setState({imageUrl: products[0]['url']})
        )
    }

    render() {
        const {
            name,
            price
        } = this.props;
        return (
            <div className="recom-img">
                {this.state.imageUrl && <div><img src={this.state.imageUrl} alt="prod-img" /><span>{name}</span><span>${price}</span></div> }
            </div>
        );
    }
}

ProdList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number
}

function mapStateToProps(){
    return {
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadProducts: bindActionCreators(productActions.loadProducts, dispatch)
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdList);