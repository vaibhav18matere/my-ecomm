import { ThemeProvider, CSSReset, Button, Stack, InputGroup, InputLeftAddon, InputRightAddon, Input, handleClick, show, PseudoBox,Heading, Box, Text } from "@chakra-ui/core"
import React from 'react';
// import Signup from './signup';
import  Signup  from './signup';
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 




function Loginform() {
    const [show, setShow] = React.useState(false);
    // let history = useHistory();

  // function handleSubmitClick() {
  //   history.push('/signup')
  // }

  const handleClick = () => {
    setShow(!show);
  }

    return (
     <PseudoBox>   
        <Box
          margin="50px 50px">
          <Stack>
            <InputGroup
              margin="0px auto"
              padding="10px"

            >
              <InputLeftAddon width="100px" children="Username" />
              <Input
                _hover={{ bg: "blue.500", color: " white" }}
                _focus={{ boxShadow: "outline" }}
                focusBorderColor="lime" type="tel" roundedLeft="0" placeholder="Type your username" />
            </InputGroup>

            {/* If you add the size prop to `InputGroup`, it'll pass it to all it's children. */}
            <InputGroup
              margin="0px auto"
              padding="10px"
            >
              <InputLeftAddon width="100px" children="Password" />
              <Input
                _hover={{ bg: "blue.500", color: " white" }}
                _focus={{ boxShadow: "outline" }}
                focusBorderColor="lime" type={show ? "text" : "password"} rounded="0" placeholder="Type your password" />
              <InputRightAddon width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Stack>
        </Box>
        <Button
          width="80px"
          margin="20px auto"
          borderColor="black"
          variantColor="green"
        >Submit</Button>

        {/* <Text>
          Don't have an Account, Kindly{" "}
          <Switch>
          <Route path="/signup" component={Signup} />
          {/* <Button color="teal.500" onClick={handleSubmitClick}>SIGN UP</Button> */}
          {/* </Switch> */}

        {/* </Text> */} 


        
        <Text
        color="teal.500">
          Don't have an Account, Kindly{" "}
          <Router> 
           <Link rel='noopener noreferrer' target="_blank"  to="/signup" variantColor="blue">Sign Up</Link> 
           <Route exact path='/signup' component={Signup}></Route>
           
       </Router>
       </Text>

   </PseudoBox>
    );
}

export default Loginform;