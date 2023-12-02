import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BASE_URL, getData } from "../utilis/api";
import axios from "axios";
import { getReccoData } from "../redux/dataSlice";

const StatusModal = ({ modalOpened, setModalOpened, product_name, id }) => {
  const dispatch = useDispatch();
  console.log(id);


  const fetchData = () => {
    getData().then((res) => {
      // console.log(res.data);
      dispatch(getReccoData(res.data));
    });
  };

  useEffect(()=>
  {
    fetchData()
  },[])


  // Function to update status : missing but not urgent
  const handleStatusMissing = () => {
    const payload = {
      status: "Missing",
    };

    axios.patch(`${BASE_URL}/products/${id}`, payload).then((res) => {
      // fetchData();
      fetchData()
      setModalOpened(false);
    });
   
    
  };

  // Function to update status: Missing but very urgent
  const handleStatusMissingButUrgent = () => {
    const payload = {
      status: "Missing, Urgent",
    }

    axios.patch(`${BASE_URL}/products/${id}`, payload).then((res) => {
      // fetchData();
      // getData()
      fetchData()
      setModalOpened(false);
    });
   
    // getData();
  };

  useEffect(() => {
    getData()
  }, []);

  //

  return (
    <Modal isOpen={modalOpened} onClose={setModalOpened}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Is {product_name} urgent ?</ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={handleStatusMissing}>
            Yes
          </Button>
          <Button
            onClick={handleStatusMissingButUrgent}
            colorScheme="blue"
            mr={3}
          >
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StatusModal;
