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

const ImagesHolder = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={2} md={2} sm={12} xs={12}>
        <Card sx={{
          width: '100%',
          marginBottom: '30px',
        }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image="fissiontesla_blue.jpg"
              alt="fissiontesla_blue"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image="buzz_.jpg"
              alt="buzz_"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item lg={10} md={10} sm={12} xs={12}>
        <Card sx={{
          width: '100%',
          position: 'relative',
        }}
        >
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
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImagesHolder;
