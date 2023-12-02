import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 13vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 29px 0px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* border: 1px solid black; */
  padding: 5px 20px;
  width: 90%;
  margin-left: 3rem;
  /* margin: auto; */

  flex-direction: row;
  gap: 1rem;
`;

const Item = styled.div`
  font-weight: ${(props) => props.bold || 400};
  font-size: ${(props) => props.fontSize || "16px"};
  text-decoration: ${(props) => props.textDecor || "none"};
  cursor: ${(props) => props.cursor || "arrow"};
`;

const Bottom = styled.div`
  display: flex;
  /* border: 1px solid black; */
  outline: none;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-left: 3rem;
  padding: 3px 18px;
  /* margin: auto; */
`;

const Button = styled.button`
  border: 1px solid black;
  background-color: ${(props) => props.bgcolor || "white"};
  padding: 4px 15px;
  margin-right: 1rem;
  border-radius: 50px;
  font-weight: 500;
  color: ${(props) => props.color || "white"};
`;

const OrderSection = () => {
  return (
    <Wrapper>
      <Top>
        <Item>Order :</Item>

        <Item textDecor={"underline"} cursor={"pointer"} bold={"bold"}>
          32872ABC
        </Item>
      </Top>
      <Bottom>
        <Item fontSize={"20px"} bold={"bold"}>
          Order 3287ABC
        </Item>

        <Item>
          <Button color="black">Back</Button>
          <Button bgcolor={"#1e633f"}>Approve Order</Button>
        </Item>
      </Bottom>
    </Wrapper>
  );
};

export default OrderSection;
