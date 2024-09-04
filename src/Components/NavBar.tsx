import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack> //HStack is a short form of horizontal stack. It is from Chakra UI. Also boxsize gives us the size of the box inwhich the logo must fit in.
  );
};

export default NavBar;
