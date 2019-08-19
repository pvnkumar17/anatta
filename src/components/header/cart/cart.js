import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './cart.css';

class Cart extends PureComponent {
    state = {
        count: this.props.count
    }

    render() {
        return (
            <div className="cart">
                {this.state.count && <span className="count">{this.state.count}</span>}
                <span className="icon-cart"></span>
            </div>
        )
    }
}

Cart.propTypes = {
    count: PropTypes.number
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);