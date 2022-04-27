import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Discount from '../icons/discount.svg'
import Add from '../icons/add.svg'

const BasicInfo = ({data}) => {
    const {article : {title, supplier_link, supplier_name, stars, price, currency, transport_costs, vat_percent, minimum_order_quantity, unit} } = data;

    return <>
            <Typography>{title}</Typography>
            <Typography variant='subtitle2'>
               by <Link href={supplier_link} variant="inherit" underline="none">
                    {supplier_name}
                </Link>
            </Typography>
            <Rating name="rating" defaultValue={stars} precision={0.5} readOnly />
            <div>
                <Typography variant='body'>{price} {currency} </Typography>
                <Typography variant='caption'> + {transport_costs} {currency} shipping</Typography>
                <Discount/>
            </div>
            <Typography variant='caption'>all prices include {vat_percent}% taxes </Typography>
            <div>
                <TextField
                    id="PCE"
                    type="number"
                    defaultValue={minimum_order_quantity}
                />{unit}
                <Button variant="outlined" startIcon={<Add/>}>
                    Add to cart
                </Button>
            </div>
            </>
};

export default BasicInfo;