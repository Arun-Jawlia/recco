import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";
import { BASE_URL, fetchDataFromApi, getData } from "../utilis/api";
import { getReccoData } from "../redux/dataSlice";
import StatusModal from "./StatusModal";
import EditModal from "./EditModal";
import DeleteIcon from "@mui/icons-material/Delete";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.p`
  font-size: 14px;
  flex: ${(props) => props.flex || 0};
  /* border: 1px solid lightgray; */
  padding: 0.6rem 0.3rem;
  text-align: center;
  display: ${(props) => props.display || "block"};
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  /* border-left: 1px solid lightgray; */
`;

const Img = styled.img`
  height: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Status = styled.div`
  /* border: 1px solid lightgray; */
  width: 100px;
  /* color: ${props=>props.color || 'blue'}; */
  background-color: ${props=>props.color || 'blue'};
  padding: 0.3rem 0.1rem;
  color: white;
  border-radius: 10px;
  font-size: 13px;
`;

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);
  const [editModal, setEditModal] = useState(false);
  // console.log(data)

  const fetchData = () => {
    getData().then((res) => {
      // console.log(res.data);
      dispatch(getReccoData(res.data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle Approve
  const handleStatusApprove = (id) => {
    const payload = {
      status: "Approved",
    };

    axios.patch(`${BASE_URL}/products/${id}`, payload).then((res) => {
      fetchData();
    });
  };

  //function handleDelete

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/products/${id}`).then((res) => {
      fetchData();
    });
  };

  return (
    <>
      {/* {
    data?.map((item,index)=>
    {
      return( */}
      <Wrapper>
        <Item flex={2} display={"flex"}>
          <Img src={item?.img} />
          {item?.product_name}
        </Item>
        <Item flex={1}>{item?.brand}</Item>
        <Item flex={1}>{item?.price}</Item>
        <Item flex={1}>{item?.quantity}</Item>
        <Item flex={1}>{item?.quantity * item?.price}</Item>
        <Item flex={2} display={"flex"}>
          <Status color={item?.status === 'Approved' ? 'green' : (item?.status !=='Na') ? 'red' : 'white'} >{item?.status !== "" ? item?.status : "Na"}</Status>

          <Button onClick={() => handleStatusApprove(item?.id)}>
            <CheckIcon size="sm" />
          </Button>
          <Button onClick={() => setModalOpened(true)}>
            <CloseIcon />
          </Button>
          <StatusModal
            product_name={item?.product_name}
            modalOpened={modalOpened}
            id={item?.id}
            setModalOpened={setModalOpened}
          />

          <Button onClick={() => setEditModal(true)}>Edit</Button>
          <EditModal
            editModal={editModal}
            setEditModal={setEditModal}
            id={item?.id}
          />

          <Button onClick={() => handleDelete(item?.id)}>
            <DeleteIcon />
          </Button>
        </Item>
      </Wrapper>
      {/* )
    })
   } */}
    </>
  );
};

export default ProductCard;
