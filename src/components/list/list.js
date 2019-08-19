import React from 'react';
import './list.css';

export const List = (props) => {
    const items = props.items;

    return(
        <div className="gen-list">
            {props.header && <div className="list-header">{props.header}</div>}
            <ul className="list-items">
                {items.map((item, index)=> <li key={index}><a href={item}>{item}</a></li> )}
            </ul>
        </div>
    )
}

export default List;