import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalLandingPage = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="#202020" h="450px">
          <ModalHeader>
            <Center>
              <Text
                bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                bgClip="text"
                fontSize="60px"
                fontWeight="bold"
                w="fit-content"
                h="fit-content"
              >
                Tankyou!
              </Text>
            </Center>
            <ModalCloseButton>
              <IoIosCloseCircleOutline
                className="text-white text-[40px] hover:cursor-pointer hover:text-slate-300"
                onClick={onClose}
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            repellendus sed officia nemo quos reprehenderit perferendis deleniti
            illo hic eaque distinctio nisi veritatis, error sit autem. Debitis
            ut repudiandae ea!
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLandingPage;
