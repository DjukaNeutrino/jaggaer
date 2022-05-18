import React, {useState} from 'react';
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
import addToCartContext from '../addToCartContext';

const Section = styled.section`
    background:#EFEFEF;
    margin-top:60px;
    padding:40px 0;
    @media (max-width: 768px) {
      padding:10px;
    }
`;

const StyledGrid = styled(Grid)`
    margin-top: 120px;
    @media (max-width: 768px) {
      margin-top:180px;
    }
`;

const Home = ({ props }) => {
  const {
    data,
    loading,
    error,
  } = useFetchData();

  const [isVisible, setIsVisible] = useState(false);

  const onIsVisible = () => {
    setIsVisible(true)
  };

  const onIsNotVisible = () => {
    setIsVisible(false)
  };

  return (
    <>
      {loading && <div> Loading... </div>}
      {error && <div> Error... </div>}
      {data
        && (
        <addToCartContext.Provider value={{isVisible}}>
          <CssBaseline>
            <Header props={props} data={data} />
            <Container maxWidth={false}>
              <StyledGrid container spacing={2} >
                <Grid item lg={5} md={5} sm={12} xs={12}>
                  <ImagesHolder data={data} />
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                  <BasicInfo data={data} onIsVisible={onIsVisible} onIsNotVisible={onIsNotVisible} />
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
        </addToCartContext.Provider>
        )}
    </>
  );
};

export default hot(module)(Home);
