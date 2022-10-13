import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Result({ emi, totalInterest, loanValue }) {
  return (
    <Container>
      <Flex
        direction={"column"}
        alignItems="center"
        justifyContent={"center"}
        gap={5}
        padding={5}
      >
        <Box>
          <Container
            size={30}
            bg="purple.400"
            p={5}
            width={["xs", "sm"]}
            centerContent
            borderRadius={"md"}
            color="white"
          >
            <Text>Loan EMI</Text>
            <Heading>{emi}</Heading>
          </Container>
        </Box>
        <Box>
          <Container
            size={30}
            bg="gray.400"
            p={5}
            width={["xs", "sm"]}
            centerContent
            borderRadius={"md"}
          >
            <Text>Total Interest Payable</Text>
            <Heading>{totalInterest}</Heading>
          </Container>
        </Box>
        <Box>
          <Container
            size={30}
            bg="gray.400"
            p={5}
            width={["xs", "sm"]}
            centerContent
            borderRadius={"md"}
          >
            <Text>Total Payment</Text>
            <Heading>{loanValue + totalInterest}</Heading>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
}

export default Result;
