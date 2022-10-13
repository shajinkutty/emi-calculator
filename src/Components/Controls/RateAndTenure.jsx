import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";

function RateAndTenure({
  interestValue,
  tenureValue,
  setInterestRate,
  setTenure,
}) {
  return (
    <Flex direction={["column", "row"]} width={["100%", "2xl"]} gap={5}>
      <Box display={"flex"} alignItems="center" gap={5}>
        <Text>Interest Rate</Text>
        <InputGroup>
          <Input
            type={"number"}
            min={0}
            step={0.1}
            value={interestValue}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <InputRightAddon children="%" />
        </InputGroup>
      </Box>
      <Box display={"flex"} alignItems="center" gap={5}>
        <Text>Loan Tenure</Text>
        <InputGroup>
          <Input
            type={"number"}
            min={1}
            value={tenureValue}
            onChange={(e) => setTenure(e.target.value)}
          />
          <InputRightAddon children="Years" />
        </InputGroup>
      </Box>
    </Flex>
  );
}

export default RateAndTenure;
