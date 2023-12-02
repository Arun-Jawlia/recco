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
  Alert,
  Box
} from "@chakra-ui/react";
import { BASE_URL,  getData } from "../utilis/api";
import { getReccoData } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useToast } from '@chakra-ui/react'

const AddProductModal = ({ addModal, setAddModal }) => {
  const [img, setImg] = useState("");
  const [product_name, setProduct_Name] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();
  const toast = useToast()
  // const {data} = useSelector(store=>store.data)

  const fetchData = () => {
    getData().then((res) => {
      dispatch(getReccoData(res.data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);



  const AddProduct = () => {
    if (
      product_name !== "" &&
      quantity !== "" &&
      price !== "" &&
      brand !== ""
    ) {
      const payload = {
        product_name: product_name,
        brand: brand,
        price: price,
        quantity: quantity,
        previous_price: "",
        previous_quantity: "",
        img:
          img ||
          "https://cdn.pixabay.com/photo/2018/03/09/08/04/avocado-3210885_640.jpg",
        status: "",
      };

      axios.post(`${BASE_URL}/products`, payload).then((res) => {
        // console.log(res.data)
        fetchData()
        setAddModal(false);
        // setProduct_Name("");
        // setBrand("");
        // setPrice("");
        // setQuantity("");
        // setImg("");
      });
    }
    
}

  return (
    <>
      <Modal isOpen={addModal} onClose={setAddModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Recco Product</ModalHeader>
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

            <FormControl mt={4}>
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
            <Button onClick={AddProduct} colorScheme="blue" mr={3}>
              Add
            </Button>
            <Button onClick={() => setAddModal(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
