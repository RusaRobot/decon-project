import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

const cardData = [
  {
    image: "",
    alt: "",
    title: "Activity 1",
    description: `[Course Description] Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
  {
    image: "",
    alt: "",
    title: "Activity 2",
    description: `[Course Description] Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
  {
    image: "",
    alt: "",
    title: "Activity 3",
    description: `[Course Description] Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
  {
    image: "",
    alt: "",
    title: "Activity 4",
    description: `[Course Description] Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
];

const Card = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    className: "card",
    adaptiveHeight: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {cardData.map((val, i) => {
          return (
            <Box
              rounded="lg"
              borderWidth=""
              borderRadius="xl"
              overflow="hidden"
              bg="#202020"
              w="530px"
              h="544px"
              key={i}
            >
              <Box bg="gray.300" height="320px">
                {/* <img
            src={val.image}
            alt={val.alt}
            className="object-cover h-[320px] w-[530px]"
          /> */}
              </Box>
              <Box p="6">
                <p className="text-yellowPrimary font-bold text-[32px]">
                  {val.title}
                </p>
                <p className="text-[#D6D6D6] mt-2">{val.description}</p>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default Card;
