import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button, BoxStyles as Box } from "./chakraComponents";

const theme = extendTheme({
  fonts: {
    heading: "nunito",
    body: "nunito",
  },
  colors: {
    yellowPrimary: "#FFD100",
    yellowSecondary: "#FFEE32",
    yellowTertiary: "#D6D6D6",
  },
  components: {
    Button,
    Box,
  },
});

export default theme;
