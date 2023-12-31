import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import {  getData } from "../utilis/api";
import { useDispatch } from "react-redux";

const EditModal = ({ editModal, setEditModal }) => {
  const [img, setImg] = useState("");
  const [product_name, setProduct_Name] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [previous_price, setPrevious_Price] = useState("");
  const [previous_quantity, setPrevious_Quantity] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();



  const UpdateProduct = () => {
    if (
      product_name !== "" &&
      quantity !== "" &&
      price !== "" &&
      brand !== ""
    ) {
      const payload = {
        product_name: product_name,
        brand: brand,
        quantity: quantity,
        price: price,
        previous_price: price,
      };
    }
  };

  //   const fetchData = () => {
  //     getData().then((res) => {
  //       dispatch(getReccoData(res));
  //     });
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <>
      <Modal isOpen={editModal} onClose={setEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image Url</FormLabel>
              <Input
                name="img"
                onChange={(e) => setImg(e.target.value)}
                placeholder="Image Url"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                name="product_name"
                onChange={(e) => setProduct_Name(e.target.value)}
                placeholder="Product Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Brand</FormLabel>
              <Input
                name="brand"
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                name="quantity"
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={UpdateProduct} colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button onClick={() => setEditModal(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
