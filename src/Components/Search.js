import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Cards from "./Cards";

const Search = ({ filter, data }) => {
  const [location, setLocation] = useState();
  const [bhk, setBhk] = useState();
  const [price, setPrice] = useState();
  const [type, setType] = useState();
  return (
    <div>
      <Container maxW={"70vw"} marginTop="30px">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Heading size={"lg"}>Search properties to rent</Heading>
          <Input h={"30px"} w={"30%"} placeholder="Search" bg={'white'} />
        </Flex>
       <Box marginTop={'20px'} bg={'white'} padding='20px 2px 20px 2px'borderRadius={'5px'}>
        <Stack direction={'row'}>
          <Select
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Select Location"
          >
            <option value="bulandshahr">Bulandshahr</option>
            <option value="meerut">Meerut</option>
            <option value="noida">Noida</option>
          </Select>
          <Select
            onChange={(e) => setBhk(e.target.value)}
            placeholder="Select BHK"
          >
            <option value="4">4 Bhk</option>
            <option value="3">3 Bhk</option>
            <option value="2">2 Bhk</option>
          </Select>
          <Select
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Select Price"
          >
            <option value="5000-15000">5000-15000</option>
            <option value="16000-20000">16000-20000</option>
            <option value="21000-30000">21000-30000</option>
          </Select>
          <Select onChange={(e) => setType(e.target.value)} placeholder="Type">
            <option value="house">House</option>
            <option value="hotel">Hotel</option>
          </Select>
          <Button
            onClick={() => {
              filter(location, price, bhk, type);
            }}
            padding="0px 35px 0px 35px"
            bg="#157DEC"
            ml={"10px"}
            color='white'
            variant={'solid'}
            colorScheme='blue'
          >
            Search
          </Button>
        </Stack>
        </Box>
      </Container>
      <Cards data={data}/>
    </div>
  );
};

export default Search;
