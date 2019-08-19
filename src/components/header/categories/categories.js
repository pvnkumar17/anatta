import React from 'react';
import "./categories.css";

export const Categories = (props) => {

    const categories = props.categories;

    return(
        <div className="categories">
            {categories.map((item, index) => <div key={index}>{item}</div>)}
        </div>
    )
}

export default Categories;