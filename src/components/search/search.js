import React from 'react';
import AnattaInput from '../anatta-input';
import './search.css';
import SearchBtn from '../../assets/img/icon-megnify.svg';

class Search extends React.PureComponent {
    state = {
        placeHolder: "Find your sneakers here" || this.props.placeHolder,
        value: "",
    };

    handleInputChange = (value) => {
        this.setState({value});
    }

    handleSearch = () => {
        //Call search api;
    }

    render(){
        const searchInputProps = {
            type: "text",
            className: "search-input"
        }
        return(
            <div className="search">
                <AnattaInput {...searchInputProps} value={this.state.value} placeHolder={this.state.placeHolder} handleInputChange={(value)=>this.handleInputChange(value)} />
                <input type="image" className="search-btn" src={SearchBtn} value="search" alt="search" onClick={this.handleSearch} />
            </div>
        )
    }
}

export default Search;