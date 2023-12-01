import styled from "styled-components";
import Navbar from "./components/Navbar";
import OrderSection from "./components/OrderSection";
import SupplierDetails from "./components/SupplierDetails";
import DataContainer from "./components/DataContainer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getReccoData } from "./redux/dataSlice";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 100vh;
  width: 100%;
`;

function App() {
  const dispatch = useDispatch();

  const getData = () => {
    axios.get("http://localhost:8080/products").then((res) => {
      console.log(res.data);
      dispatch(getReccoData(res.data));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <OrderSection />
      <SupplierDetails />
      <DataContainer />
    </Wrapper>
  );
}

export default App;
