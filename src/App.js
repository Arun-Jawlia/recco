import styled from "styled-components";
import Navbar from "./components/Navbar";
import OrderSection from "./components/OrderSection";
import SupplierDetails from "./components/SupplierDetails";
import DataContainer from "./components/DataContainer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getReccoData } from "./redux/dataSlice";
import { useEffect } from "react";
import { fetchDataFromApi, getData } from "./utilis/api";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: fit-content;
  width: 100%;
`;

function App() {
  const dispatch = useDispatch();

  const getInitialData = () => {
    getData().then((res) => {
      // console.log(res.data);
      dispatch(getReccoData(res.data));
    });
  };

  useEffect(() => {
    getInitialData();
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
