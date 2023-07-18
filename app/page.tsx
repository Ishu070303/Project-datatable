"use client";
import React from 'react';
import DataTable from './DataTable';
import {Flex} from '@chakra-ui/react';

import "./App.css";

const headers = ["TIMESTAMP", "PURCHASE ID", "MAIL", "NAME", "SOURCE", "STATUS", "SELECT"];
const rows = [
  ["25 minutes ago", "123", "girish@mail.com", "Girish Rawat", "Website", "Paid", "Select"],
  ["11 hours ago", "456", "mohit@mail.com", "Mohit Poonia", "Mobile App", "Paid", "Select"],
  ["Just now", "113", "rahul@mail.com", "Rahul Puri", "Website", "Waiting", "Select"],
  ["2 days ago", "256", "eshika@mail.com", "Eshika Poonia", "Mobile App", "Failed", "Select"],
  ["2 hours ago", "121", "rishita@mail.com", "Rishita Chugh", "Website", "Paid", "Select"],
  ["50 minutes ago", "490", "pooja@mail.com", "Pooja Chaturvedi", "Mobile App", "Waiting", "Select"],
  ["12 days ago", "890", "sakshi@mail.com", "Sakshi pathak", "Website", "Waiting", "Select"],
  ["5 minutes ago", "098", "soni@mail.com", "Soni Rawat", "Mobile App", "Failed", "Select"],
  ["1 sec ago", "098", "santoshi@mail.com", "Santoshi Rawat", "Mobile App", "Paid", "Select"],
  ["12 minutes ago", "098", "rashika@mail.com", "Rashika Sharma", "Website", "Waiting", "Select"],
  ["25 minutes ago", "123", "girish@mail.com", "Girish Rawat", "Website", "Paid", "Select"],
  ["11 hours ago", "456", "mohit@mail.com", "Mohit Poonia", "Mobile App", "Paid", "Select"],
  ["Just now", "113", "rahul@mail.com", "Rahul Puri", "Website", "Waiting", "Select"],
  ["2 days ago", "256", "eshika@mail.com", "Eshika Poonia", "Mobile App", "Failed", "Select"],
  ["2 hours ago", "121", "rishita@mail.com", "Rishita Chugh", "Website", "Paid", "Select"],
  ["50 minutes ago", "490", "pooja@mail.com", "Pooja Chaturvedi", "Mobile App", "Waiting", "Select"],
  ["12 days ago", "890", "sakshi@mail.com", "Sakshi pathak", "Website", "Waiting", "Select"],
  ["5 minutes ago", "098", "soni@mail.com", "Soni Rawat", "Mobile App", "Failed", "Select"],
  ["1 sec ago", "098", "santoshi@mail.com", "Santoshi Rawat", "Mobile App", "Paid", "Select"],
  ["12 minutes ago", "098", "rashika@mail.com", "Rashika Sharma", "Website", "Waiting", "Select"]
];

const Home: React.FC = () => {
  return (
    <Flex className='flex' h="85vh">
      <DataTable headers={headers} rows={rows} caption="BOOKINGS" sortable searchable pagination />
    </Flex>
  )
}

export default Home;