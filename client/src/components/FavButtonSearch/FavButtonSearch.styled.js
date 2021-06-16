import styled from 'styled-components';
export const StyledFavButtonSearch = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 60px;
  background: ${({ open }) => open ? '#3399bb' : 'transparent'};
  border: ${({ open }) => open ? 'white' : 'silver'};
  border-style: solid;
  border-radius: 30px;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
    
    :hover {
      opacity: .75;
    }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'white' : 'silver'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(90deg)'};
      width: ${({ open }) => open ? '24.5px' : '20px'};
      top: ${({ open }) => open ? '20px' : '15px'};
      left: ${({ open }) => open ? '20.5px' : '16.75px'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      width: 16px;
      top: 7px;
      left: 27.5px;
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(180deg)'};
      width: ${({ open }) => open ? '12px' : '16px'};
      bottom: ${({ open }) => open ? '3px' : '7px'};
      left: ${({ open }) => open ? '15.5px' : '9.5px'};
    }

    :nth-child(4) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(90deg)'};
      opacity: ${({ open }) => open ? '0' : '1'};
      width: 12px;
      left: 21px;
      bottom: 12px;
    }
  }
`;