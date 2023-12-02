import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import axios from "axios";
import { BASE_URL, fetchDataFromApi } from "../utilis/api";
import { getReccoData } from "../redux/dataSlice";
import StatusModal from "./StatusModal";
import EditModal from "./EditModal";

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
  border-left: 1px solid lightgray;
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
`;

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const getData = () => {
    fetchDataFromApi("/products").then((res) => {
      // console.log(res.data);
      dispatch(getReccoData(res.data));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleStatusApprove = (id) => {
    const payload = {
      status: "Approved",
    };

    axios.patch(`${BASE_URL}/products/${id}`, payload).then((res) => {
      // console.log(res)
      getData();
      // dispatch(getReccoData(res))
    });
  };



  return (
    <Wrapper>
      <Item flex={2} display={"flex"}>
        <Img src={data.img} />
        {data?.product_name}
      </Item>
      <Item flex={1}>{data?.brand}</Item>
      <Item flex={1}>{data?.price}</Item>
      <Item flex={1}>{data?.quantity}</Item>
      <Item flex={1}>{data?.quantity * data?.price}</Item>
      <Item flex={2} display={"flex"}>
        <Status>{data?.status !== "" ? data.status : "-"}</Status>

        <Button onClick={() => handleStatusApprove(data?.id)}>
          <CheckIcon size="sm" />
        </Button>
        <Button onClick={() =>setModalOpened(true)}>
          <CloseIcon />
        </Button>
        <StatusModal product_name={data?.product_name} modalOpened={modalOpened} id={data?.id} setModalOpened={setModalOpened} />
       
        <Button onClick={()=>setEditModal(true)} >Edit</Button>
        <EditModal editModal={editModal} setEditModal={setEditModal} id={data?.id} />
      </Item>
    </Wrapper>
  );
};

export default ProductCard;
