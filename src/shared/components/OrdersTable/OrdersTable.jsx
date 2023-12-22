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
} from "./OrdersTablestyled";

export const OrdersTable = ({ data }) => {
  const columnsRecommend = useMemo(
    () => [
      {
        Header: "User info",
        accessor: "name",
        Cell: ({ row }) => (
          <NameColumn>
            <img
              src={row.original.photo}
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
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Products",
        accessor: "products",
      },
      {
        Header: "Order date",
        accessor: "01/01/2023",
        Cell: ({ row }) => <span>{"July 31, 2023"}</span>,
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          let statusStyle = {};

          switch (value) {
            case "Cancelled":
              statusStyle = {
                color: "#E85050",
                background: "rgba(232, 80, 80, 0.10)",
              };
              break;
            case "Pending":
              statusStyle = {
                color: "#F79042",
                background: "rgba(247, 144, 66, 0.10)",
              };
              break;
            case "Completed":
              statusStyle = {
                color: "#59B17A",
                background: "rgba(89, 177, 122, 0.10)",
              };
              break;
            case "Shipped":
              statusStyle = {
                color: "rgba(255,255,255, 1)",
                background: "#59B17A",
              };
              break;
            case "Delivered":
              statusStyle = {
                background: "rgba(29, 30, 33, 0.10)",
              };
              break;
            case "Confirmed":
              statusStyle = {
                color: "#8059E4",
                background: "rgba(128, 89, 228, 0.10)",
              };
              break;
            case "Processing":
              statusStyle = {
                color: "#70A6E8",
                background: "rgba(112, 166, 232, 0.10)",
              };
              break;
            default:
              break;
          }

          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  minWidth: "108px",
                  borderRadius: "40px",
                  padding: "4px 12px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  ...statusStyle,
                }}
              >
                {value}
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnsRecommend, data: useMemo(() => data, [data]) });

  return (
    <>
      <TableWrap>
        <Title>All Orders</Title>
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
