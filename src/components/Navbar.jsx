import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled.div`
  height: 8vh;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  background-color: #1e633f;
  /* color: ${props => props.color || '#aec8bc'};   */
  color: white;

`;
const Item = styled.p`
color: ${props => props.color || '#aec8bc'};
font-size: 18px;

    &:hover{
        cursor: pointer;
        color: white;
        transition: all 0.5s ease-in-out;
    }
`;

const Left = styled.div`
 /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 5;
`;


const Right = styled.div`
 /* border: 1px solid black; */
  display: flex;
  align-items: center;
  flex: 5;
  flex-direction: row-reverse;
  gap: 2rem;
  margin-right: 3rem;
  
`;

const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Logo = styled.p`
  font-weight: bold;
  font-size: 20px;

   &:hover{
    cursor: pointer;
   }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Left>
        <Logo color={'white'}>REECO</Logo>
        <Item>Store</Item>
        <Item>Order</Item>
        <Item>Analytics</Item>
      </Left>
      <Right>
        <Item color={'white'}>
            Hello, Arun Jawlia
        </Item>
        <Item >
            <Icon>
            <ShoppingCartIcon/>
            </Icon>
        </Item>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
