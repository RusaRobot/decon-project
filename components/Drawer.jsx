import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Divider,
} from "@chakra-ui/react";
import ButtonCustom from "./buttonCustom";

const DrawerDecon = ({
  isOpenDrawer,
  onCloseDrawer,
  storyFunction,
  programFunction,
  nftFunction,
  roadmapFunction,
  activityFunction,
}) => {
  return (
    <Drawer
      size={"xs"}
      isOpen={isOpenDrawer}
      placement="right"
      onClose={onCloseDrawer}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <img
            className="w-[58px] h-[24px]"
            src="./DECON.svg"
            alt=""
            loading="lazy"
          />
        </DrawerHeader>

        <DrawerBody>
          <div className="flex flex-col gap-7">
            <Button onClick={storyFunction} bgColor="white">
              Story
            </Button>
            <Divider />
            <Button onClick={programFunction} bgColor="white">
              Program
            </Button>
            <Divider />
            <Button onClick={activityFunction} bgColor="white">
              Activity
            </Button>
            <Divider />
            <Button onClick={nftFunction} bgColor="white">
              NFT
            </Button>
            <Divider />
            <Button onClick={roadmapFunction} bgColor="white">
              Roadmap
            </Button>
          </div>
        </DrawerBody>

        {/* <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onCloseDrawer}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDecon;
