import React from 'react';
import './PriceCard.css'; // Import the CSS file for styling (optional)

const PriceCard = ({ plan, price, features, isPopular }) => {
  return (
    <div className={`price-card ${isPopular ? 'popular' : ''}`}>
      <h2 className="plan-name">{plan}</h2>
      <p className="price">{price}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature">{feature}</li>
        ))}
      </ul>
      <button className="buy-now">Buy Now</button>
    </div>
  );
};

export default PriceCard;
