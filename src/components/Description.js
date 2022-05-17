import React from 'react';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

const StyledTypography = styled(Typography)`
    text-transform: uppercase;
`;

const Description = ({ data }) => {
  const { article: { description_long } } = data;
  return (
    <>
      <StyledTypography
        variant="h6"
        color="error"
      >
        Description
      </StyledTypography>
      <Typography>{description_long}</Typography>
    </>
  );
};

export default Description;
