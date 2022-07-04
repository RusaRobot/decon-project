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
    <div className="flex flex-col">
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
      {/* <FormSection /> */}
      <PartnerSection />
      <FooterSection />
    </div>
  );
}
