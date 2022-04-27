import React from "react";
import Typography from '@mui/material/Typography';

const Description = ({data}) => {
    const {article : {description_long} } = data;
    return <>
        <Typography variant='h6'>Description</Typography>
        <Typography>{description_long}</Typography>
    </>
};

export default Description;