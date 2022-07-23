import { Text } from "@chakra-ui/react";

const StorySection = ({ storyRef }) => {
  return (
    <div className="w-full h-[800px] 2xl:h-[1100px] bg-gradient-to-b from-[#202020] to-[#333533] flex flex-col text-white pt-36 2xl:pt-96">
      <div
        className="flex justify-center mt-[10px] w-[1000px] mx-auto"
        ref={storyRef}
      >
        <Text
          bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
          bgClip="text"
          fontSize="60px"
          fontWeight="bold"
          w="fit-content"
          h="fit-content"
        >
          Decon Story
        </Text>
      </div>
      <div className="mt-8 w-[1000px] mx-auto text-justify text-[16px] text-[#D6D6D6]">
        <p className="w-[1000px]">
          An innovation-based economy will be the primary driver of
          Indonesia&apos;s economic progress. FEBUI alumni must have a strategic
          role and actively synergize with various alumni from the stakeholders
          such as the Government, investors, professionals, educational
          institutions, talents, and the media.
        </p>
      </div>
      <div className="mt-4 w-[1000px] mx-auto text-justify text-[16px] text-[#D6D6D6]">
        <p className="w-[1000px]">
          {" "}
          DECON (Digital & New Economy) is a community by FEBUI alumni that has
          the initiative to advance Indonesia&apos;s innovation economy
          ecosystem through education and talent development programs,
          strengthening professional networks, and collective business
          development activities relevant to the times.
        </p>
      </div>
      <div className="flex justify-between mx-auto w-[1000px] mt-12">
        <div className="flex flex-col w-[480px] h-[290px] bg-[#202020] rounded-3xl p-10 gap-6">
          <div className="flex items-center gap-7">
            <img src="./Education _ literacy.svg" alt="" loading="lazy" />
            <div className="text-4xl text-[#D6D6D6]">Education & Literacy</div>
          </div>
          <div className="text-[#D6D6D6]">
            Providing education and literacy is essential as people pay more
            attention to technologies. A reasonable basis of literacy will guide
            people to conquer the web3 ahead.
          </div>
        </div>
        <div>
          <div className="flex flex-col w-[480px] h-[290px] bg-[#202020] rounded-3xl p-10 gap-6">
            <div className="flex items-center gap-7">
              <img src="./Network _ community.svg" alt="" loading="lazy" />
              <div className="text-4xl text-[#D6D6D6]">Network & Community</div>
            </div>
            <div className="text-[#D6D6D6]">
              Decon comes from the community for the community. Networking and
              events will regularly be held to maintain a good relationship
              between members.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
