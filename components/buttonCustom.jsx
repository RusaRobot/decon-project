import { Button, Flex } from "@chakra-ui/react";

//use this custom button, chakar dont have any props to styling their border to be a gradient color, this is the way around to make the border to have a gradient color

// pass props text, w, and h to determine the text, width, and height respectfuly
const ButtonCustom = ({ text, w, h, onClick, size }) => {
  return (
    <div>
      <Flex
        p="2px"
        justify="center"
        align="center"
        width={w}
        height={h}
        rounded="full"
        bgGradient="linear(to-r, yellowPrimary, yellowSecondary, yellowTertiary)"
      >
        <Button
          variant="outlineCustom"
          w="100%"
          h="100%"
          bg="#202020"
          onClick={onClick}
          fontSize={size}
        >
          {text}
        </Button>
      </Flex>
    </div>
  );
};

export default ButtonCustom;
