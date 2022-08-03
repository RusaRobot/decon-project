import { Text } from "@chakra-ui/react";

const StorySection = ({ storyRef }) => {
  return (
    <div className="w-full h-full pb-10 lg:pb-0 lg:h-[900px] bg-gradient-to-b from-[#202020] to-[#333533] flex flex-col text-white pt-10 lg:pt-36">
      <div
        className="flex justify-center mt-[10px] w-full lg:w-[1000px] mx-auto"
        ref={storyRef}
      >
        <Text
          bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
          bgClip="text"
          fontSize={{ base: "24px", lg: "60px" }}
          fontWeight="bold"
          w="fit-content"
          h="fit-content"
        >
          Decon Story
        </Text>
      </div>

      {/* Desktop */}
      <div className="mt-8 w-[1000px] mx-auto text-justify text-[16px] text-[#D6D6D6] hidden lg:inline">
        <p className="w-[1000px] text-justify">
          An innovation-based economy will be the primary driver of
          Indonesia&apos;s economic progress. FEBUI alumni must have a strategic
          role and actively synergize with various alumni from the stakeholders
          such as the Government, investors, professionals, educational
          institutions, talents, and the media.
        </p>
      </div>
      <div className="mt-4 w-[1000px] mx-auto text-justify text-[16px] text-[#D6D6D6] hidden lg:inline">
        <p className="w-[1000px] text-justify">
          DECON (Digital & New Economy) is a community by FEBUI alumni that has
          the initiative to advance Indonesia&apos;s innovation economy
          ecosystem through education and talent development programs,
          strengthening professional networks, and collective business
          development activities relevant to the times.
        </p>
      </div>

      {/* Mobile */}
      <div className="mt-8 text-[16px] text-[#D6D6D6] w-full lg:hidden">
        <p className="text-justify mx-[24px] text-[12px]">
          An innovation-based economy will be the primary driver of
          Indonesia&apos;s economic progress. FEBUI alumni must have a strategic
          role and actively synergize with various alumni from the stakeholders
          such as the Government, investors, professionals, educational
          institutions, talents, and the media.
        </p>
      </div>
      <div className="mt-4 text-[16px] text-[#D6D6D6] w-full lg:hidden">
        <p className="text-justify mx-[24px] text-[12px]">
          DECON (Digital & New Economy) is a community by FEBUI alumni that has
          the initiative to advance Indonesia&apos;s innovation economy
          ecosystem through education and talent development programs,
          strengthening professional networks, and collective business
          development activities relevant to the times.
        </p>
      </div>

      {/* Desktop */}
      <div className="justify-between mx-auto w-[1000px] mt-12 hidden lg:flex">
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

      {/* Mobile */}
      <div className="flex flex-col gap-3 w-full sm:w-[600px] sm:flex-row sm:justify-between sm:mx-auto mt-12 lg:hidden">
        <div className="flex flex-col w-[263px] h-[170px] bg-[#202020] rounded-3xl p-4 gap-2 mx-auto sm:mx-0">
          <div className="flex items-center gap-3">
            <img
              className="w-[40px] h-[40px] object-cover"
              src="./Education _ literacy.svg"
              alt=""
              loading="lazy"
            />
            <div className="text-base text-[#D6D6D6]">Education & Literacy</div>
          </div>
          <div className="text-[#D6D6D6] text-[12px]">
            Providing education and literacy is essential as people pay more
            attention to technologies. A reasonable basis of literacy will guide
            people to conquer the web3 ahead.
          </div>
        </div>
        <div>
          <div className="flex flex-col w-[263px] h-[170px] bg-[#202020] rounded-3xl p-4 gap-2 mx-auto sm:mx-0">
            <div className="flex items-center gap-3">
              <img
                className="w-[40px] h-[40px] object-cover"
                src="./Network _ community.svg"
                alt=""
                loading="lazy"
              />
              <div className="text-base text-[#D6D6D6]">
                Network & Community
              </div>
            </div>
            <div className="text-[#D6D6D6] text-[12px]">
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
