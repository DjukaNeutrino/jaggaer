import React from "react";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const PricingAndShipping = ({data}) => {
    const {article : {minimum_order_quantity, delivery_time, price_breaks, currency, unit} } = data;
    return <>
        <Typography variant='h6'>Pricing and shipping</Typography>
        <Typography>{`Minimum order: ${minimum_order_quantity}`}</Typography>
        <Typography>{`Delivery: ${delivery_time}`}</Typography>
        <Typography variant='subtitle2'>Price breaks</Typography>
        <List>
            {Object.entries(price_breaks).map(([key, value], index) => <ListItem key={`feature_${index}`}>{`ex ${key}${unit}: ${value} ${currency}/${unit}`}</ListItem>)}
        </List>

    </>
};

export default PricingAndShipping;