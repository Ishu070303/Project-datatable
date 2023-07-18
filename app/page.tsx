"use client";
import React from 'react';
import DataTable from './DataTable';
import {Flex} from '@chakra-ui/react';

import "./App.css";

const headers = ["TIMESTAMP", "PURCHASE ID", "MAIL", "NAME", "SOURCE", "STATUS", "SELECT"];
const rows = [
  ["2023-07-01", "123", "girish@mail.com", "Girish Rawat", "Website", "Completed", "Select"],
  ["2022-02-05", "456", "mohit@mail.com", "Mohit Poonia", "Mobile App", "Completed", "Select"],
  ["2023-01-03", "113", "rahul@mail.com", "Rahul Puri", "Website", "Completed", "Select"],
  ["2023-08-02", "256", "eshika@mail.com", "Eshika Poonia", "Mobile App", "Pending", "Select"],
  ["2023-06-02", "121", "rishita@mail.com", "Rishita Chugh", "Website", "Completed", "Select"],
  ["2023-02-08", "490", "pooja@mail.com", "Pooja Chaturvedi", "Mobile App", "Pending", "Select"],
  ["2023-04-06", "890", "sakshi@mail.com", "Sakshi pathak", "Website", "Pending", "Select"],
  ["2023-10-12", "098", "soni@mail.com", "Soni Rawat", "Mobile App", "Pending", "Select"],
  ["2023-11-17", "098", "santoshi@mail.com", "Santoshi Rawat", "Mobile App", "Pending", "Select"],
  ["2023-08-20", "098", "rashika@mail.com", "Rashika Sharma", "Website", "Completed", "Select"],
];

const Home: React.FC = () => {
  return (
    <Flex className='flex' h="85vh">
      <DataTable headers={headers} rows={rows} caption="BOOKINGS" sortable searchable pagination />
    </Flex>
  )
}

export default Home;