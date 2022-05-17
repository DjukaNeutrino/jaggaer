import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styled from 'styled-components';
import Favorite from '../icons/favorite.svg';
import FactsSoft from '../icons/facts-soft.svg';
import Cart from '../icons/cart.svg';

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
    @media (max-width: 768px) {
      border-left:none
    }
`;

const StyledTypography = styled(Typography)`
    display: inline-block;
    margin-top: 24px;
    @media (max-width: 768px) {
      text-align:center;
    }
`;

const StyledCart = styled(Cart)`
    fill: #A7A7A7;
`;

const StyledFavorite = styled(Favorite)`
    fill: #A7A7A7;
`;

const StyledFactsSoft = styled(FactsSoft)`
    fill: #A7A7A7;
`;

const Header = ({ props, data }) => {
  const { article: { title }, cart: { items } } = data;

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

  return (
    <ElevationScroll {...props}>
      <AppBar sx={{
        borderBottom: '1px solid #E8E8E8',
        backgroundColor: '#ffffff',
      }}
      >
        <Toolbar sx={{
          width: '100%',
          display: 'block',
        }}
        >
          <StyledTypography
            color="error"
            variant="h6"
          >
            {title}
          </StyledTypography>
          <CartHolder>
            <StyledBadge
              badgeContent={items}
              color="error"
            />
            <StyledCart />
          </CartHolder>
          <FactsAndFavoritesHolder>
            <StyledFactsSoft />
          </FactsAndFavoritesHolder>
          <FactsAndFavoritesHolder>
            <StyledFavorite/>
          </FactsAndFavoritesHolder>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
