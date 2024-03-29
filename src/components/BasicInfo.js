import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Discount from '../icons/discount.svg';
import Add from '../icons/add.svg';

const StyledTextField = styled(TextField)`
    width: 50px;
    .MuiInputBase-root{
        border-radius:0;
    }
`;

const AddToCartHolder = styled.div`
    position:absolute;
    left:0;
    bottom:0
`;

const Section = styled.section`
    position:relative;
    height:100%;
    min-height:240px;
`;

const StyledLink = styled(Link)`
    color:#849FAE;
`;

const StyledRating = styled(Rating)`
    margin:12px 0px 24px 0px;
`;

const StyledTypography = styled(Typography)`
    color:#A7A7A7;
    margin-right:8px;
`;

const StyledTypographyTwo = styled(Typography)`
    color:#A7A7A7;
`;

const StyledAdd = styled(Add)`
    fill: white;
`;

function BasicInfo({ data }) {
  const {
    article:
            {
              title,
              supplier_link,
              supplier_name,
              stars, price,
              currency,
              transport_costs,
              vat_percent,
              minimum_order_quantity,
              unit,
            },
  } = data;

  return (
    <Section>
      <Typography><b>{title}</b></Typography>
      <Typography variant="subtitle2">
        by
        {' '}
        <StyledLink
          href={supplier_link}
          variant="inherit"
          underline="none"
        >
          {supplier_name}
        </StyledLink>
      </Typography>
      <StyledRating
        name="rating"
        defaultValue={stars}
        precision={0.5}
        readOnly
      />
      <div>
        <Typography
          variant="body"
        >
          <b>{price}</b>
          {' '}
          {currency}
        </Typography>
        <StyledTypography
          variant="caption"
        >
          +
          {' '}
          {transport_costs}
          {' '}
          {currency}
          {' '}
          shipping
        </StyledTypography>
        <Discount />
      </div>
      <StyledTypographyTwo
        variant="caption"
      >
        all prices include
        {' '}
        {vat_percent}
        % taxes
      </StyledTypographyTwo>
      <AddToCartHolder>
        <StyledTextField
          id="PCE"
          type="number"
          defaultValue={minimum_order_quantity}
          size="small"
        />
        {' '}
        {unit}
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: '0',
            marginLeft: '30px',
            textTransform: 'uppercase',
          }}
          startIcon={<StyledAdd />}
        >
          Add to cart
        </Button>
      </AddToCartHolder>
    </Section>
  );
}

export default BasicInfo;
