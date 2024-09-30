import React from 'react';
import PriceCard from './components/PriceCard';
import './App.css'; // Import the updated App.css file

const App = () => {
  const pricingPlans = [
    {
      plan: 'Free',
      price: '$0/month',
      features: [
        'Single User',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'No Dedicated Phone Support',
        'No Free Subdomain',
        'No Monthly Status Reports'
      ],
      isPopular: false
    },
    {
      plan: 'Plus',
      price: '$9/month',
      features: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Dedicated Phone Support',
        'Free Subdomain',
        'No Monthly Status Reports'
      ],
      isPopular: true
    },
    {
      plan: 'Pro',
      price: '$49/month',
      features: [
        'Unlimited Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="pricing-table">
      <h1>React Price Card Task</h1>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <PriceCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
