import ButtonCustom from "./buttonCustom";
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
import { useState } from "react";
import ModalLandingPage from "./ModalLandingPage";

const DeconSection = ({
  storyFunction,
  programFunction,
  activityFunction,
  nftFunction,
  roadmapFunction,
}) => {
  //Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Toast
  const toast = useToast();

  // allow user to connect to app with metamask, and obtain address
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const networkMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork(); // Switch network

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

  // if the user is connected and has an NFT from the drop, display text
  if (balance > 0) {
    return (
      <div>
        <h2>Yes, kamu adalah anggota DECONNNN!!! 🟦🔺🟣</h2>
      </div>
    );
  }

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
        <Button onClick={onOpen}>Modal</Button>
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
        <div
          onClick={connectWithMetamask}
          className="hover:scale-110 duration-500"
        >
          <ButtonCustom text="Connect Wallet" w="193px" h="43px" size="20px" />
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
          <ButtonCustom text="Connect Wallet" w="328px" h="76px" size="32px" />
        </div>
      </div>
      {balance <= 0
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
        : null}
      <ModalLandingPage isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default DeconSection;
