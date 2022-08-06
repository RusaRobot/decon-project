import Card from "./Card";
import { Text } from "@chakra-ui/react";

const ActivitySection = ({ activityRef }) => {
  return (
    <>
      <div
        ref={activityRef}
        className="flex-row w-full h-120% bg-[#333533] pb-[132px]"
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
            Activity
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
            Activity
          </Text>
        </div>

        <p className="text-[#D6D6D6] px-[30px] md:px-44 mb-10">
          An innovation-based economy will be the primary driver of
          Indonesia&apos;s economic progress. FEBUI alumni must have a strategic
          role and actively synergize with various alumni from the stakeholders
          such as the Government, investors, professionals, educational
          institutions, talents, and the media.
        </p>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default ActivitySection;
