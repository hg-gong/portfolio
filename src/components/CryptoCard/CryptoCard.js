import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './CryptoCard.css';

const useStyles = makeStyles({
  card: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
});

const CryptoCard = ({ crypto }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{crypto.name} ({crypto.symbol.toUpperCase()})</Typography>
        <Typography className={classes.text}>Price: ${crypto.current_price.toFixed(2)}</Typography>
        <Typography className={classes.text}>Market Cap: ${crypto.market_cap.toLocaleString()}</Typography>
        <Sparklines data={crypto.sparkline_in_7d.price} width={100} height={20}>
          <SparklinesLine color="white" />
        </Sparklines>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
