import ButtonCustom from "./buttonCustom";
import Image from "next/image";
import Link from "next/link";
import {
  useAddress,
  useMetamask,
  useNetworkMismatch,
  ChainId,
  useNetwork,
  useEditionDrop,
  useNFTBalance,
} from "@thirdweb-dev/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ModalLandingPage from "./ModalLandingPage";
import ModalPositive from "./ModalPositive";
import ModalNegative from "./ModalNegative";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerDecon from "./Drawer";

const DeconSection = ({
  storyFunction,
  programFunction,
  activityFunction,
  nftFunction,
  roadmapFunction,
}) => {
  //Modal
  const {
    isOpen: isOpenPositive,
    onOpen: onOpenPositive,
    onClose: onClosePositive,
  } = useDisclosure();
  const {
    isOpen: isOpenNegative,
    onOpen: onOpenNegative,
    onClose: onCloseNegative,
  } = useDisclosure();
  //Drawer
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  //Drawer Close onClick
  const onCloseStory = () => {
    storyFunction();
    onCloseDrawer();
  };
  const onCloseRoadmap = () => {
    roadmapFunction();
    onCloseDrawer();
  };
  const onCloseProgram = () => {
    programFunction();
    onCloseDrawer();
  };
  const onCloseActivity = () => {
    activityFunction();
    onCloseDrawer();
  };
  const onCloseNft = () => {
    nftFunction();
    onCloseDrawer();
  };

  //Toast
  const toast = useToast();

  // allow user to connect to app with metamask, and obtain address
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const networkMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork(); // Switch network

  //Button Change
  const [afterClick, setAfterClick] = useState(false);

  // Replace this address with your NFT Drop address!
  const editionDrop = useEditionDrop(
    "0xCFAc3aE7CcA862473E7Fbcbe091d3aA7dfadcC3E"
  );
  const [isClaiming, setIsClaiming] = useState(false);
  const { data: balance, isLoading } = useNFTBalance(editionDrop, address, "0");

  const mintNft = async () => {
    try {
      // If they don't have an connected wallet, ask them to connect!
      if (!address) {
        await connectWithMetamask();
        return;
      }

      // Ensure they're on the right network (mumbai)
      if (networkMismatched) {
        await switchNetwork(ChainId.Polygon);
        return;
      }

      setIsClaiming(true);
      await editionDrop.claim(0, 1);
    } catch (error) {
      console.error("Failed to mint NFT", error);
    } finally {
      setIsClaiming(false);
    }
  };

  //Truncate Address
  function truncateAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-5)}`;
  }

  const modalKebuka = async () => {
    try {
      await connectWithMetamask();
      setAfterClick(true);

      if (balance > 0) {
        return onOpenPositive();
      }
      if (balance <= 0) {
        return onOpenNegative();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if the user is connected and has an NFT from the drop, display text
  // if (balance > 0) {
  //   return onOpenPositive();
  // }
  // if (balance <= 0) {
  //   return onOpenNegative();
  // }

  // if (balance <= 0) {
  //   return (
  //     <div>
  //       <h2>
  //         Sorry bos gabisa, bkn tmen gw <span>{truncateAddress(address)}</span>
  //       </h2>
  //       <div>
  //         <button disabled={isClaiming} onClick={mintNft}>
  //           {isClaiming ? "Gabisa beli deng..." : "Jajan Dulu"}
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="h-[411px] lg:h-[588px] w-full text-white relative">
      <div className="flex z-10 py-10 px-8 lg:px-14 justify-between items-center bg-[#1d1b1a] bg-opacity-10 backdrop-blur-sm fixed top-0 right-0 left-0 text-[20px]">
        <Link href="/">
          <div className="w-[58px] h-[24px] lg:w-[110px] lg:h-[46px] hover:cursor-pointer">
            <img
              className="w-full h-full"
              src="./DECON.svg"
              alt=""
              loading="lazy"
            />
          </div>
        </Link>
        <button
          onClick={onOpenDrawer}
          className="text-xl text-[#FFD100] lg:hidden"
        >
          <GiHamburgerMenu />
        </button>
        <button
          onClick={storyFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500 hidden lg:inline"
        >
          Story
        </button>

        <button
          onClick={programFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500 hidden lg:inline"
        >
          Program
        </button>
        <button
          onClick={activityFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500 hidden lg:inline"
        >
          Activity
        </button>
        <button
          onClick={nftFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500 hidden lg:inline"
        >
          NFT
        </button>
        <button
          onClick={roadmapFunction}
          className="hover:text-[#FFD100] hover:scale-110 duration-500 hidden lg:inline"
        >
          Roadmap
        </button>
        <div
          onClick={() => modalKebuka()}
          className="hover:scale-110 duration-500 hidden lg:inline"
        >
          {afterClick ? (
            <ButtonCustom
              text={truncateAddress(address)}
              w="193px"
              h="43px"
              size="20px"
            />
          ) : (
            <ButtonCustom
              text="Connect Wallet"
              w="193px"
              h="43px"
              size="20px"
            />
          )}
        </div>
      </div>
      <div className="absolute w-full h-screen lg:h-fit top-0 right-0 left-0">
        <img
          className="w-full h-[411px] lg:h-[700px] object-cover bg-[#1b1a1a]"
          src="./NASA.webp"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="flex justify-center relative pt-40">
        <img
          className="w-[180px] h-[72px] lg:w-[429px] lg:h-[180px]"
          src="./DECON.svg"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="flex justify-center relative">
        <p className="w-[272px] lg:w-[712px] text-center text-[12px] lg:text-[32px]">
          An Ecosystem to navigate in the Future of Digital Economy through
          community
        </p>
      </div>
      {afterClick ? (
        <div className="flex justify-center relative pt-10">
          <div
            className="hover:scale-110 duration-500"
            onClick={() => modalKebuka()}
          >
            {/* HOME BIG BUTTON */}
            <ButtonCustom text="Access Member" w="328px" h="76px" size="32px" />
          </div>
        </div>
      ) : null}

      {/* {balance <= 0
        ? toast({
            title: "Gabisa",
            description: (
              <div>
                <h2>
                  Sorry bos gabisa, bkn tmen gw{" "}
                  <span>{truncateAddress(address)}</span>
                </h2>
                <div>
                  <button disabled={isClaiming} onClick={mintNft}>
                    {isClaiming ? "Gabisa beli deng..." : "Jajan Dulu"}
                  </button>
                </div>
              </div>
            ),
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        : null} */}
      {/* <ModalLandingPage isOpen={isOpen} onClose={onClose} balance={balance} /> */}
      <ModalPositive
        isOpen={isOpenPositive}
        onClose={onClosePositive}
        balance={balance}
      />
      <ModalNegative
        isOpen={isOpenNegative}
        onClose={onCloseNegative}
        balance={balance}
      />
      <DrawerDecon
        isOpenDrawer={isOpenDrawer}
        onCloseDrawer={onCloseDrawer}
        storyFunction={onCloseStory}
        programFunction={onCloseProgram}
        nftFunction={onCloseNft}
        roadmapFunction={onCloseRoadmap}
        activityFunction={onCloseActivity}
      />
    </div>
  );
};

export default DeconSection;
