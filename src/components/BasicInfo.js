import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Discount from '../icons/discount.svg';
import Add from '../icons/add.svg';
import  {styled as styledMaterial}  from '@mui/material/styles';
import styled from 'styled-components';

const StyledTextField = styledMaterial(TextField)(() => ({
    width: '50px',
    '& .MuiOutlinedInput-root': {
       height:'35px',
        borderRadius:0
    }
}));

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

const BasicInfo = ({data}) => {
    const {article : {title, supplier_link, supplier_name, stars, price, currency, transport_costs, vat_percent, minimum_order_quantity, unit} } = data;

    return <Section>
                <Typography style={{ fontWeight: 600 }}>{title}</Typography>
                <Typography variant='subtitle2'>
                   by <Link href={supplier_link} variant="inherit" underline="none" style={{ color: "#849FAE" }} >
                        {supplier_name}
                    </Link>
                </Typography>
                <Rating name="rating" defaultValue={stars} precision={0.5} readOnly style={{ margin: "12px 0 24px 0" }}/>
                <div>
                    <Typography variant='body' style={{ fontWeight: 600 }}>{price} {currency} </Typography>
                    <Typography variant='caption'> + {transport_costs} {currency} shipping</Typography>
                    <Discount/>
                </div>
                <Typography variant='caption'>all prices include {vat_percent}% taxes </Typography>
                <AddToCartHolder>
                    <StyledTextField
                        id="PCE"
                        type="number"
                        defaultValue={minimum_order_quantity}
                    /> {unit}
                    <Button variant="contained" color="error" sx={{borderRadius:'0', marginLeft:'30px'}} startIcon={<Add style={{fill:'white'}}/>}>
                        Add to cart
                    </Button>
                </AddToCartHolder>
            </Section>
};

export default BasicInfo;