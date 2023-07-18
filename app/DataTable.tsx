"use client";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from "@chakra-ui/table";
import { Box, Flex, Input, InputGroup, InputLeftElement, Spacer, Text, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface DataTableProps {
  headers: string[];
  rows: (string | JSX.Element)[][];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean; //Adding a pagination property
  searchable?: boolean; //Adding a searchable property
}

const DataTable: React.FC<DataTableProps> = ({ headers, rows, caption, sortable, pagination, searchable }) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchValue, setSearchValue] = useState("");

  //For pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5) // set the number of items per page


  const handleSort = (column: string) => {
    if (!sortable) return;

    if (column === sortedColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  //Search implemented
  const filterRows = () => {
    if(!searchValue) return rows;

    return rows.filter((row) => 
     row.some((cell) => 
       typeof cell === "string" && cell.toLowerCase().includes(searchValue.toLowerCase())
     )
    );
  };

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

  const paginateRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedRows.slice(startIndex, endIndex);
  };

  
  return (
    <Box className="bx">
      <Flex className="div">
      {caption && <Text className="text" fontWeight="bold">{caption}</Text>}
      <Spacer />
      {searchable && (
        <div className="search">
        <InputGroup mb={4}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="tomato" />} />
          <Input 
          variant='outline'
          width= {170}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputGroup>
        </div>
      )}
      </Flex>
      <TableContainer className="tc">
      <Table variant='simple' className="table">
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
                <Td key={cellIndex} className="td">{
                   cell
                }</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      </TableContainer>
      {pagination && (
        <Box mt={4} display="flex" justifyContent="flex-end" style={{marginRight: "1rem"}}>
          <Button
          size="sm"
          color="blue.600"
          style={{ border: "2px solid #2B6CB0", backgroundColor: 'white'}}
          onClick={() => setCurrentPage((prev) => Math.max(prev-1, 1))}
          disabled={currentPage == 1}
          >
             Previous
          </Button>
          <Text className="typo" mx={5}>{currentPage}</Text>
          <Button
          size="sm"
          color="blue.600"
          style={{ border: "2px solid #2B6CB0", backgroundColor: 'white'}}
          onClick={() => 
          setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(sortedRows.length / itemsPerPage)))
          }

          disabled={currentPage === Math.ceil(sortedRows.length / itemsPerPage)}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DataTable;
