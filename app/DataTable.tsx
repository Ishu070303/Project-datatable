"use client";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from "@chakra-ui/table";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface DataTableProps {
  headers: string[];
  rows: (string | JSX.Element)[][];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ headers, rows, caption, sortable, pagination }) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (!sortable) return;

    if (column === sortedColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
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
  
  return (
    <Box className="bx">
      {caption && <Text fontWeight="bold">{caption}</Text>}
      <TableContainer className="tc">
      <Table variant='striped' colorScheme='teal' className="table">
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
          {sortedRows.map((row, rowIndex) => (
            <Tr key={rowIndex} className="tr">
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex} className="td">{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;