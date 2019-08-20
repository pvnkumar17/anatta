import React from 'react';
import "./categories.css";

export const Categories = (props) => {

    const categories = props.categories;

    return(
        <div className="categories desktop-only">
            {categories.map((item, index) => <div key={index}>{item}</div>)}
        </div>
    )
}

export default Categories;