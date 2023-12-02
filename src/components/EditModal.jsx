import React from "react";
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

const EditModal = ({ editModal, setEditModal, id }) => {
  const fetchData = () => {
    getData().then((res) => {
      dispatch(getReccoData(res));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Modal isOpen={editModal} onClose={setEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input placeholder="Product Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Brand</FormLabel>
              <Input placeholder="Brand" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder="Price" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input placeholder="Quantity" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={() => setEditModal(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
