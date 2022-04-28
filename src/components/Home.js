import React from 'react';
import { hot } from 'react-hot-loader/index';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import useFetchData from '../hooks/useFetchData';
import Header from './Header';
import BasicInfo from './BasicInfo';
import Description from './Description';
import Details from './Details';
import PricingAndShipping from './PricingAndShipping';
import ImagesHolder from './ImagesHolder';

const Section = styled.section`
    background:#EFEFEF;
    margin-top:60px;
    padding:40px;
`;

const StyledGrid = styled(Grid)`
    margin-top: 120px;
`;

function Home({ props }) {
  const {
    data,
    loading,
    error,
  } = useFetchData();

  return (
    <>
      {loading && <div> Loading... </div>}
      {error && <div> Error... </div>}
      {data
        && (
        <CssBaseline>
          <Header props={props} data={data} />
          <Container maxWidth={false}>
            <StyledGrid container spacing={2} >
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <ImagesHolder data={data} />
              </Grid>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <BasicInfo data={data} />
              </Grid>
            </StyledGrid>
          </Container>
          <Section>
            <Container maxWidth={false}>
              <Grid container spacing={2}>
                <Grid item lg={10} md={10} sm={12} xs={12}>
                  <Description data={data} />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={5} md={5} sm={5} xs={12}>
                  <Details data={data} />
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={12}>
                  <PricingAndShipping data={data} />
                </Grid>
              </Grid>
            </Container>
          </Section>
        </CssBaseline>
        )}
    </>
  );
}

export default hot(module)(Home);
