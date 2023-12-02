import styled from "styled-components";
import DataCard from "./DataCard";
import AddProductModal from "./AddProductModal";
import { useState } from "react";

const Wrapper = styled.div`
  height: fit-content;
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;

  padding: 1rem 0rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 0.3rem 1rem; */
  border-radius: 10px;
`;

const Input = styled.input`
  width: 40%;
  padding: 0.3rem 1rem;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  outline: none;
  border-radius: 50px;
`;

const Button = styled.button`
  border: 1px solid #1e633f;
  padding: 4px 15px;
  margin-right: 1rem;
  border-radius: 50px;
  font-weight: 500;
  color: #1e633f;
`;

const Main = styled.div`
  height: fit-content;
  border: 1px solid lightgray;
  width: 90%;
  /* margin-top:; */
  border-radius: 10px;
  padding: 1rem 2rem;
`;

const DataContainer = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <Wrapper>
      <Main>
        <Header>
          <Input placeholder="Search..." />
          <Button onClick={() => setAddModal(true)}>ADD</Button>
          <AddProductModal addModal={addModal} setAddModal={setAddModal} />
        </Header>
        <DataCard />
      </Main>
    </Wrapper>
  );
};

export default DataContainer;
