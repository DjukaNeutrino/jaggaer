import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Favorite from '../icons/favorite.svg';
import FactsSoft from '../icons/facts-soft.svg';
import Cart from '../icons/cart.svg';
import styled from 'styled-components';

const StyledBadge = styled(Badge)`
        right: -22px;
        top: -10px;
        border: 1px solid #fff; 
    `;

const FactsAndFavoritesHolder = styled.div`
    float:right;
    padding:24px 12px;
`;

const CartHolder = styled.div`
    float:right;
    padding:24px 12px;
    border-left:1px solid #E8E8E8;
`;

const Header = ({props, data}) => {
    const {article : {title}, cart:{items} } = data;

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
            <AppBar sx={{borderBottom:'1px solid #E8E8E8',
                        backgroundColor:'#ffffff'
                        }}>
                <Toolbar sx={{ width: '100%',
                                display:'block'}}>
                    <Typography color="error"
                                variant="h6"
                                style={{display:'inline-block',
                                        marginTop:'24px'
                                }}>
                        {title}
                    </Typography>
                    <CartHolder>
                        <StyledBadge badgeContent={items}
                                     color="error"/>
                        <Cart style={{fill:'#A7A7A7'}}/>
                    </CartHolder>
                    <FactsAndFavoritesHolder>
                        <FactsSoft style={{fill:'#A7A7A7'}}/>
                    </FactsAndFavoritesHolder>
                    <FactsAndFavoritesHolder>
                        <Favorite style={{fill:'#A7A7A7'}}/>
                    </FactsAndFavoritesHolder>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
};

export default Header;