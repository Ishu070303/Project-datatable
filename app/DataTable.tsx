"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/table";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  WarningTwoIcon,
  CheckIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

interface DataTableProps {
  headers: string[];
  rows: (string | JSX.Element)[][];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean; //Adding a pagination property
  searchable?: boolean; //Adding a searchable property
  resizable?: boolean; //Adding a resizable property
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  rows,
  caption,
  sortable,
  pagination,
  searchable,
}) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchValue, setSearchValue] = useState("");
  console.log(rows);

  //For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // set the number of items per page

  // Function for sorting by ascending or decending
  const handleSort = (column: string) => {
    if (!sortable) return;

    if (column === sortedColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  //Function for searching rows
  const filterRows = () => {
    if (!searchValue) return rows;

    return rows.filter((row) =>
      row.some(
        (cell) =>
          typeof cell === "string" &&
          cell.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  //Function for sorted rows by (Ascending or Descending Ways)
  const sortedRows = [...filterRows()].sort((a, b) => {
    if (!sortedColumn) return 0;

    const columnIndex = headers.indexOf(sortedColumn);
    if (columnIndex === -1) return 0;

    const aValue = a[columnIndex];
    const bValue = b[columnIndex];

    if (typeof aValue === "string" && typeof bValue === "string") {
      if (sortDirection === "asc") return aValue.localeCompare(bValue);
      else return bValue.localeCompare(aValue);
    }

    return 0;
  });


  //Functiom for pagination
  const paginateRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedRows.slice(startIndex, endIndex);
  };

  // to display total number of rows
  const totalNumberOfPages = Math.ceil(sortedRows.length / itemsPerPage);

  return (
    <Box className="bx">
      <Flex className="div">
        {caption && (
          <Text className="text" fontWeight="bold">
            {caption}
          </Text>
        )}
        <Spacer />
        {searchable && (
          <div className="search">
            <InputGroup
              mb={4}
              style={{ border: "1px solid #2B6CB0", borderRadius: "12px" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="blue.600" />}
              />
              <Input
                variant="outline"
                width={170}
                placeholder="Search"
                value={searchValue}
                style={{ border: "1px solid #2B6CB0", borderRadius: "12px" }}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </InputGroup>
          </div>
        )}

        {/* {resizable && (
          <div className="resize">
            <Select
              width={120}
              value={selectedFilter}
              style={{ border: "2px solid #2B6CB0", borderRadius: "12px" }}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="auto">Auto</option>
              {headers.map((header, index) => (
                <option key={index} value={index}>
                  {header}
                </option>
              ))}
            </Select>
          </div>
        )} */}
      </Flex>
      <TableContainer className="tc">
        <Table variant="striped" color="blue.50" className="table">
          <Thead className="head">
            <Tr className="Trw">
              {headers.map((header, index) => (
                <Th
                  key={index}
                  onClick={() => handleSort(header)}
                  cursor={sortable ? "pointer" : "default"}
                  _hover={sortable ? { textDecoration: "underline" } : {}}
                  className="Thead"
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody className="tbdy">
            {paginateRows().map((row, rowIndex) => (
              <Tr key={rowIndex} className="tr">
                {row.map((cell, cellIndex) => (
                  <Td key={cellIndex} className="td">
                    {headers[cellIndex] == "STATUS" ? (
                      <Button
                        style={{
                          backgroundColor: `${
                            cell === "Paid"
                              ? "#9AE6B4"
                              : cell == "Failed"
                              ? "#FEB2B2"
                              : "#FAF089"
                          }`,
                          fontWeight: "500",
                        }}
                        color={
                          cell === "Paid"
                            ? "green"
                            : cell === "Failed"
                            ? "red"
                            : "black"
                        }
                        size="sm"
                        borderRadius="3xl"
                        rightIcon={
                          cell == "Paid" ? (
                            <CheckIcon />
                          ) : cell === "Failed" ? (
                            <WarningTwoIcon />
                          ) : (
                            <RepeatIcon />
                          )
                        }
                      >
                        {cell}
                      </Button>
                    ) : headers[cellIndex] === "SELECT" ? (
                      <Button
                        style={{
                          backgroundColor: "#BEE3F8",
                          fontWeight: "300",
                        }}
                        size="sm"
                        borderRadius="md"
                      >
                        {cell}
                      </Button>
                    ) : (
                      cell
                    )}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {pagination && (
        <Box
          mt={4}
          display="flex"
          justifyContent="flex-end"
          style={{ marginRight: "1rem" }}
        >
          <Button
            size="sm"
            color="blue.600"
            leftIcon={<ArrowLeftIcon />}
            style={{ border: "2px solid #2B6CB0", backgroundColor: "white" }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage == 1}
          >
            Previous
          </Button>
          <Text className="typo" mx={5}>
            {currentPage} / {totalNumberOfPages}{" "}
          </Text>
          <Button
            size="sm"
            rightIcon={<ArrowRightIcon />}
            color="blue.600"
            style={{ border: "2px solid #2B6CB0", backgroundColor: "white" }}
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(sortedRows.length / itemsPerPage))
              )
            }
            disabled={
              currentPage === Math.ceil(sortedRows.length / itemsPerPage)
            }
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DataTable;
