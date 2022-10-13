import {
  Box,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function LoanAmount({ value, handleChangeLoanValue }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Flex direction={"column"} width={["100%", "2xl"]} gap={5}>
      <Box display={"flex"} alignItems="center" gap={5}>
        <Text>Loan Amount</Text>
        <NumberInput
          step={10000}
          value={value}
          min={0}
          max={5000000}
          width="md"
          allowMouseWheel
          format={(number) => numberWithCommas(number)}
          onChange={handleChangeLoanValue}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
      <Slider
        focusThumbOnChange={false}
        value={value}
        onChange={handleChangeLoanValue}
        step={10000}
        min={0}
        max={5000000}
      >
        {[...Array(10).keys()].map((mark) => {
          const value = mark * 500000 + 500000;
          return (
            <SliderMark key={mark} value={value} mt="1" ml="-2.5" fontSize="sm">
              {value / 100000}L
            </SliderMark>
          );
        })}

        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value / 100000} />
      </Slider>
    </Flex>
  );
}

export default LoanAmount;
