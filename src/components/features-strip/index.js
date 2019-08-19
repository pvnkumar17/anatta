import React from 'react';
import './features-strip.css';

export const FeaturesStrip = () => {
    const features = [{icon:'return', feature: 'Secure Payment'}, {icon:'shipping', feature: 'Express Shipping'}, {icon:'return', feature: 'Free Returns'}];
    return(
        <div className="feature-strip">
            <ul>
                {features.map((item, index) =><li key={index}><span className={item.icon}></span>{item.feature}</li> )}
            </ul>
        </div>
    )
}

export default FeaturesStrip;