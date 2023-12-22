import { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import {
  IconWrapper,
  NameColumn,
  Table,
  TableWrap,
  Td,
  Th,
  Title,
  Tr,
} from "./CustomersTable.styled";

const generateRandomPhoneNumber = () => {
  const prefix = "+8801";
  const randomDigits = Math.floor(Math.random() * 10000000000);
  const phoneNumber = `${prefix}${String(randomDigits).padStart(10, "0")}`;
  return phoneNumber;
};

export const CustomersTable = ({ data }) => {
  const columnsRecommend = useMemo(
    () => [
      {
        Header: "User info",
        accessor: "name",
        Cell: ({ row }) => (
          <NameColumn>
            <img
              src={row.original.image}
              alt={`${row.original.name}'s Avatar`}
              style={{
                marginRight: "8px",
                borderRadius: "30px",
                width: "36px",
                height: "36px",
              }}
            />
            {row.original.name}
          </NameColumn>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: generateRandomPhoneNumber(),
        Cell: ({ row }) => <span>{generateRandomPhoneNumber()}</span>,
      },
      {
        Header: "Register date",
        accessor: "01/01/2023",
        Cell: ({ row }) => <span>{"Aug 1, 2023"}</span>,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnsRecommend, data: useMemo(() => data, [data]) });

  return (
    <>
      <TableWrap>
        <Title>Customers Data</Title>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <Th {...column.getHeaderProps()}>
                    <IconWrapper>{column.render("Header")}</IconWrapper>
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) => (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrap>
    </>
  );
};
