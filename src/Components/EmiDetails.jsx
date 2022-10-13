import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function EmiDetails({ data }) {
  console.log(data);
  return (
    <Container maxWidth={"container.xl"} p={10}>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th isNumeric>PMT No</Th>
              <Th isNumeric>BEGINNING BALANCE</Th>
              <Th isNumeric>PRINCIPAL</Th>
              <Th isNumeric>INTEREST</Th>
              <Th isNumeric>ENDING BALANCE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((payment, index) => (
              <Tr key={index}>
                <Td isNumeric>{index + 1}</Td>

                <Td isNumeric>{payment.beginningBal}</Td>
                <Td isNumeric>{payment.principal}</Td>
                <Td isNumeric>{payment.interest}</Td>
                <Td isNumeric>{payment.endingBal}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th isNumeric>PMT No</Th>
              <Th isNumeric>BEGINNING BALANCE</Th>
              <Th isNumeric>PRINCIPAL</Th>
              <Th isNumeric>INTEREST</Th>
              <Th isNumeric>ENDING BALANCE</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default EmiDetails;
