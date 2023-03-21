import React, { useState, useEffect } from 'react';

function EthPrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const data = await response.json();
      setPrice(data.ethereum.usd);
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // fetch price every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {price ? <p>Current ETH price: ${price}</p> : <p>Loading...</p>}
    </div>
  );
}

export default EthPrice;
