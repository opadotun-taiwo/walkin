import React, { useState } from 'react';

const GroupBuy = () => {
  const [orders, setOrders] = useState(0);
  const [voucherEnabled, setVoucherEnabled] = useState(false);

  const handleOrderClick = () => {
    setOrders(orders + 1);

    if (orders + 1 >= 10) {
      setVoucherEnabled(true);
    }
  };

  return (
    <>
      <div>
        <h2>Item Name</h2>
        <p>Price: $10</p>
        <button onClick={handleOrderClick}>Order Now</button>
      </div>

      {voucherEnabled && (
        <div>
          <h3>Voucher Information</h3>
          <p>You have unlocked a voucher for 20% off!</p>
          <p>Use voucher code: GROUPBUY10</p>
        </div>
      )}
    </>
  );
};

export default GroupBuy;
