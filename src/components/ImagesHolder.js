import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import ZoomIn from '../icons/zoom-in.svg';

const ZoomInHolder = styled.div`
    position:absolute;
    right:10px;
    bottom:0
`;

const StyledZoomIn = styled(ZoomIn)`
    fill:#A7A7A7;
`;

const StyledCard = styled(Card)`
    width:100%;
    margin-bottom:30px;
`;

const StyledCardTwo = styled(Card)`
    width:100%;
`;

const StyledCardThree = styled(Card)`
    width:100%;
    position:relative;
`;

const ImagesHolder = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={2} md={2} sm={12} xs={12}>
        <StyledCard>
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image="fissiontesla_blue.jpg"
              alt="fissiontesla_blue"
            />
          </CardActionArea>
        </StyledCard>
        <StyledCardTwo>
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image="buzz_.jpg"
              alt="buzz_"
            />
          </CardActionArea>
        </StyledCardTwo>
      </Grid>
      <Grid item lg={10} md={10} sm={12} xs={12}>
        <StyledCardThree>
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image="InnovaDiscGolfDiscs.jpg"
              alt="InnovaDiscGolfDiscs"
            />
          </CardActionArea>
          <ZoomInHolder>
            <StyledZoomIn />
          </ZoomInHolder>
        </StyledCardThree>
      </Grid>
    </Grid>
  );
};

export default ImagesHolder;
