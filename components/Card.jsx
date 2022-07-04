import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

const cardData = [
  {
    image: "/DeconBlockchainDeFi.jpg",
    alt: "",
    title: "Activity 1",
    description: `Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
  {
    image: "/DeconCourse1.jpg",
    alt: "",
    title: "Activity 2",
    description: `Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
  {
    image: "/DeconCourse2.jpg",
    alt: "",
    title: "Activity 3",
    description: `Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
  {
    image: "/DeconCourse3.jpg",
    alt: "",
    title: "Activity 4",
    description: `Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
  {
    image: "DeconVol2.jpg",
    alt: "",
    title: "Activity 5",
    description: `Providing education and literacy is
  essential as people pay more attention to
  technologies. A reasonable basis of
  literacy will guide people to conquer the
  web3 ahead`,
  },
];

const cardDataCarousel = ({ description }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-[#202020] w-[530px] h-[544px]">
      <div className="bg-gray-300 h-[222px]"></div>
      <div className="">
        <p className="text-yellowPrimary font-bold text-[32px]">{val.title}</p>
        <p className="text-[#D6D6D6] mt-2">{val.description}</p>
      </div>
    </div>
  );
};

const Card = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {cardData.map((val, i) => {
          return (
            <div className="" key={i}>
              <div className="rounded-xl overflow-hidden bg-[#202020] w-[200px] h-[600px]">
                <div className="bg[#142247] container h-[320px] overflow-hidden flex">
                  <img
                    src={val.image}
                    alt={val.alt}
                    className="object-cover mx-auto"
                  />
                </div>
                <div className="p-6">
                  <p className="text-yellowPrimary font-bold text-[14px]">
                    {val.title}
                  </p>
                  <p className="text-[#D6D6D6] mt-2">{val.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div> */}
      </Slider>
    </div>
  );
};

export default Card;
