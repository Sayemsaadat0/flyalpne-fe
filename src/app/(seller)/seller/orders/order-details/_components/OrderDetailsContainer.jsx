import React from 'react';
import OrderDetails from './OrderDetails';
import OrderTracking from './OrderTracking';

const OrderDetailsContainer = () => {
  return (
    <div>
      <OrderDetails />
      <OrderTracking />
    </div>
  );
};

export default OrderDetailsContainer;
