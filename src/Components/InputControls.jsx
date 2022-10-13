import { Container, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LoanAmount from "./Controls/LoanAmount";
import RateAndTenure from "./Controls/RateAndTenure";
import Result from "./Controls/Result";
import { Finance } from "financejs";

function InputControls({ setData }) {
  const [loading, setLoading] = useState(false);
  const [loanValue, setLoanValue] = useState(10000);
  const [interestRate, setInterestRate] = useState(7);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [interestPayable, setInterestPayable] = useState(0);

  const handleChangeLoanValue = (value) => setLoanValue(value * 1);
  const handleChangeInterestValue = (value) => setInterestRate(value * 1);
  const handleChangeTenureValue = (value) => setTenure(value * 1);

  const finance = new Finance();

  const getMonthlyPayment = (emiValue) => {
    let temp = [];
    let initialBal = 0;
    let cumulativeInterest = 0;
    [...Array(tenure * 12).keys()].forEach((v) => {
      let beginningBal = +(loanValue - initialBal).toFixed(2);
      const interest = +((beginningBal * (interestRate / 12)) / 100).toFixed(2);
      const principal = +(emiValue - interest).toFixed(2);
      const endingBal = +(beginningBal - principal).toFixed(2);
      initialBal += principal;
      cumulativeInterest += +interest.toFixed(2);
      temp.push({
        beginningBal,
        emi: +emiValue,
        principal,
        interest,
        endingBal,
        cumulativeInterest,
      });
    });
    setData(temp);
    setInterestPayable(+temp[temp.length - 1].cumulativeInterest.toFixed(2));
  };

  useEffect(() => {
    setLoading(true);
    const handleCalculation = () => {
      const emiResult = finance.PMT(
        interestRate / 12 / 100,
        tenure * 12,
        -loanValue
      );
      setEmi(+emiResult.toFixed(2));
      return new Promise((resolve) => resolve(+emiResult.toFixed(2)));
    };
    handleCalculation().then((data) => {
      getMonthlyPayment(data);
    });
    setLoading(false);
  }, [loanValue, interestRate, tenure]);

  return (
    <Container maxWidth={"container.xl"}>
      <Heading py={5}>EMI Calculator</Heading>

      <Flex gap={5} direction={["column", "row"]}>
        <Flex
          direction={"column"}
          gap={10}
          padding={10}
          border="1px solid"
          borderColor={"gray.300"}
          borderRadius="md"
        >
          <LoanAmount
            value={loanValue}
            handleChangeLoanValue={handleChangeLoanValue}
          />
          <RateAndTenure
            interestValue={interestRate}
            tenureValue={tenure}
            setInterestRate={handleChangeInterestValue}
            setTenure={handleChangeTenureValue}
          />
        </Flex>
        <Result
          loanValue={loanValue}
          emi={emi}
          totalInterest={interestPayable}
        />
      </Flex>
    </Container>
  );
}

export default InputControls;
