import {
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import React from "react";

const Cards = ({ data }) => {
  return (
    <div>
      <Container mt={"25px"} maxW={"70vw"}>
        <Flex justifyContent={"space-between"} flexWrap="wrap" gap={"10px"}>
          {data.map((elem) => {
            return (
              <>
                <Card maxW="250px" bg={"white"}>
                  <Image
                    src={elem.img}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    w={"100%"}
                  />
                  <CardBody>
                    <Stack mt="" spacing="3">
                      <Stack direction={"row"}>
                        <Heading size="md" color={"#157DEC"}>
                          ₹{elem.price}
                        </Heading>
                        <Text fontSize={"15px"} color={"lightgray"}>
                          /Month
                        </Text>
                      </Stack>
                      <Heading
                        lineHeight={"1px"}
                        fontFamily="cursive"
                        size={"md"}
                      >
                        {elem.name}
                      </Heading>

                      <Text
                        color={"lightgray"}
                        fontFamily="-moz-initial"
                        noOfLines={1}
                      >
                        {elem.address}
                      </Text>
                      <Flex justifyContent={"space-between"}>
                        <Text color={"lightgray"} fontFamily="-moz-initial">
                          <i
                            style={{ color: "#157DEC" }}
                            class="fa-solid fa-bed"
                          ></i>{" "}
                          {elem.bhk} Beds
                        </Text>
                        <Text color={"lightgray"} fontFamily="-moz-initial">
                          <i
                            style={{ color: "#157DEC" }}
                            class="fa-solid fa-toilet"
                          ></i>{" "}
                          {elem.bathroom} Bathroom
                        </Text>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
              </>
            );
          })}
        </Flex>
      </Container>
    </div>
  );
};

export default Cards;
