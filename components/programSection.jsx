import { Text } from "@chakra-ui/react";
import ButtonCustom from "./buttonCustom";
import UISlider from "./slider";

const ProgramSection = ({ programRef }) => {
  return (
    <>
      <div
        ref={programRef}
        className="flex-row w-full h-full bg-[#202020] pb-[74px]"
      >
        <div className="hidden md:inline">
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
            Programs
          </Text>
        </div>

        <div className="md:hidden">
          <Text
            bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
            bgClip="text"
            fontSize="40px"
            fontWeight="bold"
            w="fit-content"
            h="fit-content"
            mx="auto"
            pt="40px"
            pb="32px"
          >
            Programs
          </Text>
        </div>

        <div className="lg:flex lg:w-[1060px] lg:h-[530px] lg:mx-auto">
          {/* left item */}
          <div className="rounded-2xl w-[340px] mx-auto md:w-[530px]">
            <UISlider>
              <img
                src="/1.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/2.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/3.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/4.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/5.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/6.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/7.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/8.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/9.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/10.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
              <img
                src="/11.png"
                className="object-fill w-full aspect-square rounded-2xl"
                loading="lazy"
              />
            </UISlider>
          </div>
          {/* right item */}
          <div className="mt-[36px] mx-auto lg:mx-0 lg:mt-0 w-[90vw] lg:w-[530px] text-white">
            <div className="ml-8">
              <p className="font-bold text-2xl">
                GET READY TO FACE THE DIGITALIZATION OF THE ECONOMY!
              </p>
              <br />
              <div className="text-[15px]">
                <p>
                  Digital and New Economy Course presented by MSS FEBUI x ILUNI
                  FEBUI
                </p>
                <br />
                <p className="">
                  The Digital and New Economy Course (DECON) is a program that
                  aims to prepare FEB UI students to compete in the digital
                  economy era. Students will be taught various highly demanded
                  and lucrative skills and knowledge that are essential for them
                  to become leaders in the future.
                </p>
                <br />
                <p className="">
                  This program will be held in the form of an 11 sessions course
                  that will be presented by mentors from various well-known and
                  credible companies based on their respective fields of
                  expertise.
                </p>
                <br />
                <p className="">
                  Date: Saturday, May 14ᵗʰ - August 20ᵗʰ 2022 <br />
                  Time: 10.00-12.00 WIB <br />
                  Place: Auditorium R. Soeriaatmadja FEB UI
                </p>
              </div>
              <a
                target="_blank"
                href="https://www.youtube.com/c/MSSFEBUIchannel"
                rel="noopener noreferrer"
              >
                <div className="mt-12 w-fit mx-auto md:mx-0">
                  <div className="hover:scale-110 duration-500">
                    <ButtonCustom text="Watch Now" w="193px" h="43px" />
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1Ds2fUFSEdJLSMDV9bhzb85YY2OHD4Wjj?usp=sharing"
                rel="noopener noreferrer"
              >
                <div className="flex-center text-center md:text-start align-center mt-[5px]">
                  <button className="flex-center align-center hover:bg-blue-700 rounded text-white text-[15px]">
                    Learning materials download
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
