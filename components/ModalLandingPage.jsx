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

const ModalLandingPage = ({ isOpen, onOpen, onClose, balance }) => {
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
              {balance > 0 ? (
                <>
                  <div className="w-[192px] h-[270px]">
                    <img src="./Decon.png" alt="Decon" />
                  </div>
                  <div className=" w-[530px] h-[275px]">
                    <p className="text-[#D6D6D6] text-base">
                      Thankyou udah beli nft gen 1, kamu sekarang udah bisa
                      mendapatkan benefit ini:
                    </p>
                    <div className="text-[#D6D6D6] mt-6 flex justify-between">
                      <div className="w-[250px]">
                        <Text
                          bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                          bgClip="text"
                          fontSize="24px"
                          fontWeight="bold"
                        >
                          Voting Rights
                        </Text>
                        <p className="text-base mt-1">
                          1 man 1 vote will be adopted
                        </p>
                      </div>
                      <div className="w-[250px]">
                        <Text
                          bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                          bgClip="text"
                          fontSize="24px"
                          fontWeight="bold"
                        >
                          Holder Gathering
                        </Text>
                        <p className="text-base mt-1">
                          An exclusive networking opportuniy for NFT Holders
                        </p>
                      </div>
                    </div>
                    <div className="text-[#D6D6D6] mt-6 flex justify-between">
                      <div className="w-[250px]">
                        <Text
                          bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                          bgClip="text"
                          fontSize="24px"
                          fontWeight="bold"
                        >
                          Exclusive Club
                        </Text>
                        <p className="text-base mt-1">
                          A place where holders can share about blockchains
                          opportunity
                        </p>
                      </div>
                      <div className="w-[250px]">
                        <Text
                          bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                          bgClip="text"
                          fontSize="24px"
                          fontWeight="bold"
                        >
                          Education
                        </Text>
                        <p className="text-base mt-1">
                          Education and updates related to blockchain & crypto
                          insight
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-white mx-auto text-3xl mt-[100px]">
                  Maaf anda belum mempunyai NFT
                </p>
              )}
            </div>
            {balance > 0 ? (
              <a
                target="_blank"
                href="https://opensea.io/"
                rel="noopener noreferrer"
              >
                <Center>
                  <div className="mt-[40px] hover:scale-110 duration-500">
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

export default ModalLandingPage;
