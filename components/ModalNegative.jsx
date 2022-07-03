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
import Link from "next/link";
import ButtonCustom from "./buttonCustom";

const ModalNegative = ({ isOpen, onOpen, onClose, balance }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="#202020" h="570px" maxW="947px">
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
                {balance > 0 ? "Tankyou!" : "Sorry..."}
              </Text>
            </Center>
            <ModalCloseButton w="36px" h="36px" mt="24px" mr="40px">
              <IoIosCloseCircleOutline
                className="text-white text-[40px] hover:cursor-pointer hover:text-slate-300"
                onClick={onClose}
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <div className="flex justify-between mx-[70px] mt-[27px]">
              (
              <p className="text-white mx-auto text-3xl mt-[100px]">
                Maaf anda belum mempunyai NFT
              </p>
              )
            </div>
            {balance > 0 ? (
              <a
                target="_blank"
                href="https://opensea.io/"
                rel="noopener noreferrer"
              >
                <Center>
                  <div className="mt-[40px] hover:scale-110 duration-500 w-fit">
                    <ButtonCustom h="44px" w="148px" text="View NFT" />
                  </div>
                </Center>
              </a>
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalNegative;
