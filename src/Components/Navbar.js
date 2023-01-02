import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex 
        height={"60px"}
        borderBottom='1px solid lightskyblue'
        bg={'white'}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack spacing={4} direction="row" align="center" marginLeft={'20px'}>
         <Heading size={'md'} color='#157DEC'>Estate</Heading>
          <Link to={'/'}><Button size="sm" variant={'link'}>Rent</Button></Link>
          <Button disabled size="sm" variant={'link'}>Buy</Button>
          <Link to={'/sell'}><Button size="sm" variant={'link'}>Sell</Button></Link>
        </Stack>

        <Stack spacing={4} direction="row" align="center" marginRight={"20px"}>
          <Button size={'sm'} border={"solid 1px #157DEC"}>
            SignIn
          </Button>
          <Button size={'sm'} color={'white'} bg={"#157DEC"} colorScheme='blue'>SignUp</Button>
        </Stack>
      </Flex>
    </div>
  );
};

export default Navbar;
