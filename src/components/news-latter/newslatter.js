import React from 'react';
import AnattaInput from '../anatta-input';
import './news-latter.css';

class NewsLatter extends React.PureComponent {
    state = {
        placeHolder: "Enter Email" || this.props.placeHolder,
        value: "",
    };

    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({value});
    }

    sendEmail = () => {
        //Call email api;
    }

    render(){
        const searchInputProps = {
            type: "email",
            className: "email-input"
        }
        return(
            <div className="news-latter">
                <div className="news-header">Newsletter</div>
                <AnattaInput {...searchInputProps} value={this.state.value} placeHolder={this.state.placeHolder} handleInputChange={(e)=>this.handleInputChange(e)} />
                <input type="submit" className="email-btn" value="Join Us" onClick={this.sendEmail} />
            </div>
        )
    }
}

export default NewsLatter;