import React from 'react';
import {StyledFavButton } from './FavButton.styled';

const FavButton = ({ open, setOpen }) => {
  return (
    <StyledFavButton open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
      <div />
    </StyledFavButton>
  )
}

export default FavButton;