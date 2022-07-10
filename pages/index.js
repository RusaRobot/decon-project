import ActivitySection from "../components/activitySection";
import NFTSection from "../components/NFTSection";
import ProgramSection from "../components/programSection";
import { useRef } from "react";
import DeconSection from "../components/deconSection";
import StorySection from "../components/storySection";
import RoadmapSection from "../components/roadmapSection";
import FormSection from "../components/formSection";
import FooterSection from "../components/footerSection";
import PartnerSection from "../components/partnerSection";
import { Text } from "@chakra-ui/react";

export default function Home() {
  //Ref
  const story = useRef(null);
  const program = useRef(null);
  const activity = useRef(null);
  const nft = useRef(null);
  const roadmap = useRef(null);

  //Function
  const scrollToElement = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="xl:flex flex-col hidden ">
        <DeconSection
          storyFunction={() => {
            scrollToElement(story);
          }}
          roadmapFunction={() => {
            scrollToElement(roadmap);
          }}
          programFunction={() => {
            scrollToElement(program);
          }}
          activityFunction={() => {
            scrollToElement(activity);
          }}
          nftFunction={() => {
            scrollToElement(nft);
          }}
        />
        <StorySection storyRef={story} />
        <ProgramSection programRef={program} />
        <ActivitySection activityRef={activity} />
        <NFTSection nftRef={nft} />
        <RoadmapSection roadmapRef={roadmap} />        
        <PartnerSection />
        <FormSection />
        <FooterSection />
      </div>
      <div className="xl:hidden bg-[#202020] min-h-screen">
        <div className="flex justify-center">
          <div className="mt-[30vh]">
            <img
              className="w-[300px] h-[100px]"
              src="./DECON.svg"
              alt="DECON"
              loading="lazy"
            />
            <Text
              bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
              bgClip="text"
              fontSize="5vw"
              fontWeight="bold"
              w="fit-content"
              h="fit-content"
              mx="auto"
            >
              Mobile Web Under Development
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
