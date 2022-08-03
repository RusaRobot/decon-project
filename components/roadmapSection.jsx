import { GoPrimitiveDot } from "react-icons/go";
import { Text } from "@chakra-ui/react";

const RoadmapSection = ({ roadmapRef }) => {
  return (
    <div
      // ref={roadmapRef}
      className="w-full h-[1050px] lg:h-[626px] bg-gradient-to-t from-[#212121] to-[#333533] flex flex-col"
    >
      <div className="flex justify-center mt-20">
        <Text
          bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
          bgClip="text"
          fontSize={{ base: "24px", lg: "60px" }}
          fontWeight="bold"
          w="fit-content"
          h="fit-content"
        >
          Roadmap
        </Text>
      </div>
      <div className="lg:flex-row lg:justify-between flex flex-col mx-auto mt-12 gap-8 lg:w-[1000px]">
        <div className="w-[270px] h-[250px] lg:w-[348px] lg:h-[272px] bg-[#202020] rounded-3xl p-10 text-[#D6D6D6]">
          <div className="text-3xl flex justify-center border-b-2 border-b-[#D6D6D6] py-3 text-[#FFD100]">
            Phase 1
          </div>
          <div className="pt-4 flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Launch</span>
          </div>
          <div className="flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Gathering</span>
          </div>
          <div className="flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Website Development</span>
          </div>
          <div className="flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Education</span>
          </div>
        </div>
        <div className="w-[270px] h-[250px] lg:w-[348px] lg:h-[272px] bg-[#202020] rounded-3xl p-10 text-[#D6D6D6]">
          <div className="text-3xl flex justify-center border-b-2 border-b-[#D6D6D6] py-3 text-[#FFD100]">
            Phase 2
          </div>
          <div className="pt-4 flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Decon DAO</span>
          </div>
          <div className="flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Education for public</span>
          </div>
          <div className="flex items-center gap-1">
            <GoPrimitiveDot />
            <span>NFT Gen 2 for ILUNI</span>
          </div>
        </div>
        <div className="w-[270px] h-[250px] lg:w-[348px] lg:h-[272px] bg-[#202020] rounded-3xl p-10 text-[#D6D6D6]">
          <div className="text-3xl flex justify-center border-b-2 border-b-[#D6D6D6] py-3 text-[#FFD100]">
            Phase 3
          </div>
          <div className="pt-4 flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Expanding holders</span>
          </div>
          <div className="flex items-center gap-1">
            <GoPrimitiveDot />
            <span>Decon DAO Incubator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
