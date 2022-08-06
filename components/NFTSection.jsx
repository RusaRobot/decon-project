import { Text } from "@chakra-ui/react";
import ButtonCustom from "./buttonCustom";
import Link from "next/link";

const NFTSection = ({ nftRef, hiddenProp, roadmapRef }) => {
  return (
    <>
      <div
        ref={nftRef}
        className="flex-row w-full h-120% bg-[#202020] pb-[84px] pt-[80px]"
      >
        <div className="lg:flex justify-between mx-auto lg:gap-[32px] lg:w-fit">
          <div className="mx-auto lg:mx-0 w-[263px] h-[368px] lg:w-[514px] lg:h-[796px]">
            <img
              className="h-[368px] lg:h-[796px] object-cover"
              src="/DECON-Card.gif"
              alt="Decon"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-[514px] lg:h-[796px]">
            <div className="hidden lg:inline">
              <Text
                bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                bgClip="text"
                fontSize="60px"
                fontWeight="bold"
                w="fit-content"
                h="fit-content"
                mx="auto"
                pt="40px"
                pb="32px"
              >
                1st Gen NFT Community Membership
              </Text>
            </div>

            <div className="text-center lg:hidden w-full">
              <Text
                bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                bgClip="text"
                fontSize="24px"
                fontWeight="bold"
                w="fit-content"
                h="fit-content"
                mx="auto"
                pt="40px"
                pb="32px"
              >
                1st Gen NFT Community Membership
              </Text>
            </div>

            <p className="text-[#D6D6D6] text-base mx-5 lg:mx-0">
              Decon’s NFT is here to support the digital economy through the
              community of Alumni FEB UI. As a membership pass, this NFT will
              give the holder access to the activity made by the community such
              as gathering, networking, education, foundation, etc.
              <br />
              <br />
              Decon’s NFT willbe the first NFT membership on the Indonesian
              Campus Alumni Association. And hopefully, be the reference of
              others. By being the first iluni to start, Decon’s may have many
              advantages on the ecosystem.
            </p>
            <div className="text-[#D6D6D6] mt-6 flex flex-col lg:flex-row justify-between mx-5 lg:mx-0">
              <div className="w-full lg:w-[250px]">
                <Text
                  bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                  bgClip="text"
                  fontSize="24px"
                  fontWeight="bold"
                >
                  Voting Rights
                </Text>
                <p className="text-base mt-1">1 man 1 vote will be adopted</p>
              </div>
              <div className="w-full lg:w-[250px] mt-6 lg:mt-0">
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
            <div className="text-[#D6D6D6] mt-6 flex flex-col lg:flex-row justify-between mx-5 lg:mx-0">
              <div className="w-full lg:w-[250px]">
                <Text
                  bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                  bgClip="text"
                  fontSize="24px"
                  fontWeight="bold"
                >
                  Exclusive Club
                </Text>
                <p className="text-base mt-1">
                  A place where holders can share about blockchains opportunity
                </p>
              </div>
              <div className="w-full lg:w-[250px] mt-6 lg:mt-0">
                <Text
                  bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
                  bgClip="text"
                  fontSize="24px"
                  fontWeight="bold"
                >
                  Education
                </Text>
                <p className="text-base mt-1">
                  Education and updates related to blockchain & crypto insight
                </p>
              </div>
            </div>
            <a
              target="_blank"
              href="https://opensea.io/assets/matic/0xcfac3ae7cca862473e7fbcbe091d3aa7dfadcc3e/0"
              rel="noopener noreferrer"
              ref={roadmapRef}
            >
              <div
                hidden={hiddenProp}
                className="mt-[40px] hover:scale-110 duration-500 w-fit mx-auto lg:mx-0"
              >
                <ButtonCustom h="43px" w="193px" text="View More" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTSection;
