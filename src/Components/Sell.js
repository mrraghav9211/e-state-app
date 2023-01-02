import {
  Container,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import React,{useState} from "react";

const Sell = () => {
  const arr=JSON.parse(localStorage.getItem("propData")) || [];

  const [name, setname] = useState()
  const [price, setprice] = useState()
  const [type, settype] = useState()
  const [location, setlocation] = useState()
  const [bhk, setbhk] = useState()
  const [bathroom, setbathroom] = useState()
  const [address, setaddress] = useState()
   
 
  const handleClick=()=>{
    const data={
      name:name,
      price:price,
      type:type,
      location:location,
      bhk:bhk,
      bathroom:bathroom,
      address:address,
      img:""
    };
   arr.push(data);
   localStorage.setItem("propData", JSON.stringify(arr))
   alert("Data uploaded successfully")
  }
  return (
    <div>
      <Container bg={"white"} maxW="60vw" padding={'30px'}>
        <Heading size={"lg"}>Add properties to rent and buy</Heading>
        <Stack mt={'20px'} direction={"row"}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input onChange={(e)=>setname(e.target.value)} placeholder="Enter Prop. Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <Input onChange={(e)=> setprice(e.target.value)} type={"number"} placeholder="Enter price" />
          </FormControl>
        </Stack>
        <Stack mt={'20px'} direction={"row"}>
          <FormControl isRequired>
            <FormLabel>Type</FormLabel>
            <Select onChange={(e)=> settype(e.target.value)} placeholder="Select Type">
              <option value={"hotel"}>Hotel</option>
              <option value={"house"}>House</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <Select onChange={(e)=> setlocation(e.target.value)} placeholder=" Select Location">
              <option value={"bulandshahr"}>Bulandshahr</option>
              <option value={"meerut"}>Meerut</option>
              <option value={"noida"}>Noida</option>
            </Select>
          </FormControl>
        </Stack>
        <Stack mt={'20px'} direction={"row"}>
          <FormControl isRequired>
            <FormLabel>Bhk</FormLabel>
            <Select onChange={(e)=> setbhk(e.target.value)} placeholder=" Select Bhk">
              <option value={"4"}>4</option>
              <option value={"3"}>3</option>
              <option value={"2"}>2</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Bathroom</FormLabel>
            <Select onChange={(e)=> setbathroom(e.target.value)} placeholder=" Select Bathroom">
              <option value={"4"}>4</option>
              <option value={"3"}>3</option>
              <option value={"2"}>2</option>
            </Select>
          </FormControl>
        </Stack>
        <Stack mt={'20px'} direction={'row'}>
        <FormControl isRequired>
  <FormLabel>Address</FormLabel>
 <Input onChange={(e)=> setaddress(e.target.value)} placeholder="Enter full Address"/>
</FormControl>
<FormControl isRequired>
  <FormLabel>Image</FormLabel>
 <Input type={'file'}/>
</FormControl>
        </Stack>
        <Button onClick={handleClick} mt={'30px'} float='right' colorScheme='blue'>
            Submit
        </Button>
      </Container>
    </div>
  );
};

export default Sell;
