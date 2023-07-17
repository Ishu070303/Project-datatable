"use client";
import React from 'react';
import DataTable from './DataTable';
import { Box, Flex, Heading } from '@chakra-ui/react';

import "./App.css";

const headers = ["Timestamp", "Purchase Id", "Mail", "Name", "Source", "Status", "Select"];
const rows = [
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5", "Value 6", "Value 7"],
  ["Value 8", "Value 9", "Value 10", "Value 11", "Value 12", "Value 13", "Value 14"],
  // Add more rows as needed
];

const Home: React.FC = () => {
  return (
    <Box p={4}>
    <Flex justify="center" align="center" direction="column" h="100vh">
      <Heading mb={4}>DataTable Example</Heading>
      <DataTable headers={headers} rows={rows} caption="Bookings" sortable />
    </Flex>
  </Box>
  )
}

export default Home;