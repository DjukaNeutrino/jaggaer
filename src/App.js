import React from "react";
import {hot} from "react-hot-loader";
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";
import data from '../resources/data.json';
import Header from './components/Header';
import Grid from '@mui/material/Grid';
import BasicInfo from './components/BasicInfo';
import Description from './components/Description';
import Container from '@mui/material/Container';

const App = ({props}) => {
    console.log(data);
    return <>
            <CssBaseline />
            <Header props={props} data={data}/>
            <Container maxWidth={false}>
                <Grid container spacing={2} style={{marginTop:'80px'}}>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        5
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <BasicInfo data={data}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item lg={10} md={10} sm={12} xs={12}>
                        <Description data={data}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        Details
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        Pricing
                    </Grid>
                </Grid>
            </Container>
        </>
};

export default hot(module)(App);