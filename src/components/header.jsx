import react from 'react';
import { Box, Heading, Text, Button, PseudoBox, Image} from '@chakra-ui/core';
import Signup from './signup';
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 


function Header() {
     
  const property = {
    imageUrl:"https://bit.ly/2Z4KKcF",

  };


    return (
        <PseudoBox>
        <Box maxW="30rem">
          {/* <Image src={property.imageUrl}></Image> */}
        <Heading mb={4}>MY E-commerce Store</Heading>
        <Text fontSize="xl">TAP and BUY anything.</Text>
      </Box><br /><br />
     
      <Box maxW="20rem"
      margin-inline-start= "auto">
      <Button
      variantColor="green"
      right="0px">
         <Router> 
           <Link rel='noopener noreferrer' target="_blank" color="teal.500" to="/signup"  >Create Account for Free</Link> 
           <Route exact path='/signup' component={Signup}></Route>
           
       </Router>
      </Button>
      </Box>
      </PseudoBox>
    );
}


export default Header;