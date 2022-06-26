import ButtonCustom from "./buttonCustom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";

const DeconSection = ({
  storyFunction,
  programFunction,
  activityFunction,
  nftFunction,
  roadmapFunction,
}) => {
  //Connect Wallet
  const connectWallet = () => {};

  return (
    <div className="h-[735px] w-full text-white relative">
      <div className="flex z-10 py-10 px-14 justify-between items-center absolute top-0 right-0 left-0 text-[20px]">
        <Link href="/">
          <div className="w-[110px] h-[46px] hover:cursor-pointer">
            <img className="w-full h-full" src="./DECON.svg" alt="" />
          </div>
        </Link>
        <button
          onClick={storyFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500"
        >
          Story
        </button>
        <button
          onClick={programFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500"
        >
          Program
        </button>
        <button
          onClick={activityFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500"
        >
          Activity
        </button>
        <button
          onClick={nftFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500"
        >
          NFT
        </button>
        <button
          onClick={roadmapFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500"
        >
          Roadmap
        </button>
        <div className="hover:scale-110 duration-500">
          <ButtonCustom
            text="Connect Wallet"
            w="193px"
            h="43px"
            onClick={""}
            size="20px"
          />
        </div>
      </div>
      <div className="absolute w-[1349px] h-fit top-0 right-0 left-0">
        <img
          className="w-full object-cover bg-[#1b1a1a]"
          src="./NASA.svg"
          alt=""
        />
      </div>

      <div className="flex justify-center relative pt-40">
        <img className="w-[429px] h-[180px]" src="./DECON.svg" alt="" />
      </div>
      <div className="flex justify-center relative">
        <p className="w-[712px] text-center text-[32px]">
          An Ecosystem to navigate in the Future of Digital Economy through
          community
        </p>
      </div>
      <div className="flex justify-center relative pt-10">
        <div className="hover:scale-110 duration-500">
          <ButtonCustom
            text="Connect Wallet"
            w="328px"
            h="76px"
            onClick={""}
            size="32px"
          />
        </div>
      </div>
    </div>
  );
};

export default DeconSection;
