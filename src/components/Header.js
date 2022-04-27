import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Favorite from '../icons/favorite.svg';
import FactsSoft from '../icons/facts-soft.svg'
import Cart from '../icons/cart.svg'


const Header = ({props, data}) => {
    const {article : {title} } = data;

    const ElevationScroll = (props) => {
        const { children } = props;

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 1 : 0,
        });
    };

    return(
        <ElevationScroll {...props}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <FactsSoft style={{fill: "white"}}/>
                    <Favorite style={{fill: "white"}}/>
                    <Cart style={{fill: "white"}}/>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )

};

export default Header;