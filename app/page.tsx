"use client";
import React from 'react';
import DataTable from './DataTable';
import {Flex} from '@chakra-ui/react';

import "./App.css";

const headers = ["TIMESTAMP", "PURCHASE ID", "MAIL", "NAME", "SOURCE", "STATUS", "SELECT"];
const rows = [
  ["2023-07-01", "123", "example@mail.com", "John Doe", "Website", "Completed", "Select"],
  ["2023-07-02", "456", "test@mail.com", "Jane Smith", "Mobile App", "Pending", "Select"],
  ["2023-07-01", "123", "example@mail.com", "John Doe", "Website", "Completed", "Select"],
  ["2023-07-02", "456", "test@mail.com", "Jane Smith", "Mobile App", "Pending", "Select"],
  ["2023-07-01", "123", "example@mail.com", "John Doe", "Website", "Completed", "Select"],
  ["2023-07-02", "456", "test@mail.com", "Jane Smith", "Mobile App", "Pending", "Select"],
  ["2023-07-01", "123", "example@mail.com", "John Doe", "Website", "Completed", "Select"],
  ["2023-07-02", "456", "test@mail.com", "Jane Smith", "Mobile App", "Pending", "Select"],
  // Add more rows as needed
];

const Home: React.FC = () => {
  return (
    <Flex className='flex' h="80vh">
      <DataTable headers={headers} rows={rows} caption="BOOKINGS" sortable searchable pagination />
    </Flex>
  )
}

export default Home;