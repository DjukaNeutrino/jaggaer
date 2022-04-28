import React from "react";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styled from "styled-components";

const Section = styled.section`
    background:#FFFFFF;
    padding:16px;
    margin-top:36px;
`;

const Ul = styled.ul`
    padding-left: 16px;
    margin-top:0
`;

const PricingAndShipping = ({data}) => {
    const {article : {minimum_order_quantity, delivery_time, price_breaks, currency, unit, transport_costs} } = data;
    return <Section>
            <Typography variant='h6' color="error" style={{borderBottom:"1px solid #E8E8E8", marginBottom:'16px'}}>Pricing and shipping</Typography>
            <Ul>
                <li>
                    <Typography variant='body2' component="span" style={{color:"#A7A7A7"}}>
                        {`Minimum order: `}
                    </Typography>
                    <Typography variant='subtitle2' component="span">
                        {minimum_order_quantity} {unit}
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2' component="span" style={{color:"#A7A7A7"}}>
                        {`Delivery: `}
                    </Typography>
                    <Typography variant='subtitle2' component="span">
                       {transport_costs} {currency}
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2' component="span" style={{color:"#A7A7A7"}}>
                        {`Delivery: `}
                    </Typography>
                    <Typography variant='subtitle2' component="span">
                        {`${delivery_time} days`}
                    </Typography>
                </li>
            </Ul>

            <Typography variant='body2' style={{borderBottom:"1px solid #E8E8E8", color:"#A7A7A7"}}>Price breaks</Typography>
            <List>
                {Object.entries(price_breaks).map(([key, value], index) =>
                    <ListItem key={`feature_${index}`} style={{borderBottom:"1px solid #E8E8E8"}}>
                        <Typography variant='subtitle2' component="span">{`ex ${key}${unit}: ${value} ${currency}/${unit}`}</Typography>
                    </ListItem>)}
            </List>
        </Section>
};

export default PricingAndShipping;