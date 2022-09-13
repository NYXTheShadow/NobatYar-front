import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";

const Header = () => {
  return (
    <Box pos="fixed" w="100%">
      <Flex
        p={4}
        bg="gray.100"
        minWidth="max-content"
        alignItems="center"
        gap="2"
      >
        <Box p="2">
          <Heading size="md">نوبت یار</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">ثبت نام</Button>
          <Button colorScheme="teal">ورود</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Header;
