import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import CryptoCard from "../CryptoCard/CryptoCard";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true");
      setCryptos(response.data);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      {cryptos.map((crypto) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={crypto.id}>
          <CryptoCard crypto={crypto} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CryptoList;
