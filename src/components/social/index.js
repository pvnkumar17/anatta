import React from 'react';
import './social.css';

export const Social = (props) => {
    const socialList = props.socialList;

    return(
        <ul className="social">
            {socialList.map((social, index) => <li key={index}><a href={social.link} className={social.className}></a></li>)}
        </ul>
    )

}

export default Social;