import React from 'react';
import PriceCard from './components/PriceCard';
import './components/PriceCard.css'; 

const App = () => {

  const plans = [
    {
      plan: 'Basic Plan',
      price: '$10/month',
      features: ['Single User', '1.5GB/Day', 'Unlimited Calls'],
      isPopular: false
    },
    {
      plan: 'Standard Plan',
      price: '$20/month',
      features: ['5 User', '2GB/Day', 'Unlimited Calls'],
      isPopular: true
    },
    {
      plan: 'Premium Plan',
      price: '$30/month',
      features: ['10 User', '2.5GB/Day', 'Unlimited Calls'],
      isPopular: false
    }
  ];

  return (
    <div className="app">
      {plans.map((plan, index) => (
        <PriceCard
          key={index}
          plan={plan.plan}
          price={plan.price}
          features={plan.features}
          isPopular={plan.isPopular}
        />
      ))}
    </div>
  );
};

export default App;
