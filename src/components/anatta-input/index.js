import React from 'react';
import PropTypes from "prop-types";
import './anatta-input.css';

class AnattaInput extends React.PureComponent {
    state = {
        placeHolder: this.props.placeHolder || "text input",
        value: this.props.value || ""
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.value !== nextProps.value)
            this.setState({value: nextProps.value});
    }

    handleInputValue = (e) => {
        const value = e.target.value;
        this.props.handleInputChange(value);
    }

    render(){
        const {
            type,
            className
        } = this.props;

        return(
                <input type={type} className={className} value={this.state.value} placeholder={this.state.placeHolder} onChange={(e)=>this.handleInputValue(e)} />
        )
    }
}

AnattaInput.propTypes ={
    type: PropTypes.string.isRequired,
    className: PropTypes.string
}

AnattaInput.defaultProps = {
    type: "text",
    className: "input-box"
}

export default AnattaInput;