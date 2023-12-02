import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  margin: 0 auto;
`;

const Main = styled.div`
  height: 80%;
  /* border: 1px solid red; */
  border-radius: 10px;
  border: 1px solid lightgray;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  border-left: ${(props) => props.border || "1px solid lightgray"};
  height: 100%;
  width: 100%;
  padding: 0.4rem 0.5rem;
`;

const Heading = styled.div`
  font-size: 14px;
  color: green;
  font-weight: 500;
`;

const Detail = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
`;

const SupplierDetails = () => {
  const [price, setPrice] = useState("");
  const { data } = useSelector((store) => store.data);

  // Function to fetch data total price
  const fetchTotalPrice = () => {
    const totalPrice = data.reduce((a, c) => a + c.price * c.quantity, 0);
    //  console.log(totalPrice)
    setPrice(totalPrice);
  };

  useEffect(() => {
    fetchTotalPrice();
  }, [data]);

  return (
    <Wrapper>
      <Main>
        <Item border={"none"}>
          <Heading>Supplier</Heading>
          <Detail>East Coast fruits & vegetables</Detail>
        </Item>
        <Item>
          <Heading>Shipping date</Heading>
          <Detail>Sat, Dec 02</Detail>
        </Item>
        <Item>
          <Heading>Total</Heading>
          <Detail>Rs. {price}</Detail>
        </Item>
        <Item>
          <Heading>Category</Heading>
          <Detail>Food</Detail>
        </Item>
        <Item>
          <Heading>Department</Heading>
          <Detail>300-444-678</Detail>
        </Item>
        <Item>
          <Heading>Status</Heading>
          <Detail>Awaiting your approval</Detail>
        </Item>
      </Main>
    </Wrapper>
  );
};

export default SupplierDetails;
