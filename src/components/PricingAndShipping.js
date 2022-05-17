import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import styled from 'styled-components';

const Section = styled.section`
    background:#FFFFFF;
    padding:16px;
    margin-top:36px;
`;

const Ul = styled.ul`
    padding-left: 16px;
    margin-top:0
`;

const StyledTypography = styled(Typography)`
    border-bottom:1px solid #E8E8E8;
    margin-bottom:16px;
    text-transform:uppercase;
    padding-bottom:16px;
`;

const StyledTypographyTwo = styled(Typography)`
    color:#A7A7A7;
`;

const StyledTypographyThree = styled(Typography)`
    border-bottom:1px solid #E8E8E8;
    color:#A7A7A7;
    margin-top:24px;
`;

const StyledListItem = styled(Typography)`
    border-bottom:1px solid #E8E8E8;
    padding:5px 10px;
`;

const PricingAndShipping = ({ data }) => {
  const {
    article: {
      minimum_order_quantity, delivery_time, price_breaks, currency, unit, transport_costs,
    },
  } = data;

  const priceBrakesListRender = () => {
    return Object.entries(price_breaks).map(([key, value], index) =>
      <StyledListItem key={`feature_${index}`}>
        <Typography
          variant="subtitle2"
          component="span"
        >
          {`ex ${key}${unit}: ${value} ${currency}/${unit}`}
        </Typography>
      </StyledListItem>
    )
  };

  return (
    <Section>
      <StyledTypography variant="h6" color="error">
        {`Pricing and shipping`}
      </StyledTypography>
      <Ul>
        <li>
          <StyledTypographyTwo variant="body2" component="span">
            {`Minimum order:  `}
          </StyledTypographyTwo>
          <Typography variant="subtitle2" component="span">
            {`${minimum_order_quantity} ${unit}`}
          </Typography>
        </li>
        <li>
          <StyledTypographyTwo variant="body2" component="span">
            {`Delivery:  `}
          </StyledTypographyTwo>
          <Typography variant="subtitle2" component="span">
            {`${transport_costs} ${currency}`}
          </Typography>
        </li>
        <li>
          <StyledTypographyTwo variant="body2" component="span">
            {'Delivery:  '}
          </StyledTypographyTwo>
          <Typography variant="subtitle2" component="span">
            {`${delivery_time} days`}
          </Typography>
        </li>
      </Ul>

      <StyledTypographyThree variant="body2">
        {`Price breaks`}
      </StyledTypographyThree>
      <List>
        {priceBrakesListRender()}
      </List>
    </Section>
  );
};

export default PricingAndShipping;
