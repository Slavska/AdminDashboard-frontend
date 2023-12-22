import { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import {
  IconWrapper,
  Table,
  TableWrap,
  Td,
  Th,
  Title,
  Tr,
} from "./IncomeExpences.styled";

export const IncomeExpences = ({ data }) => {
  const columnsRecommend = useMemo(
    () => [
      {
        Header: "Today",
        accessor: (row) => (row.amount > 0 ? "Income" : "Expense"),
        Cell: ({ value }) => (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: value === "Income" ? "#59B17A" : "#E85050",
              borderRadius: "40px",
              padding: "4px",
              fontSize: "14px",
              background:
                value === "Income"
                  ? "rgba(89, 177, 122, 0.10)"
                  : "rgba(232, 80, 80, 0.10)",
            }}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Name or Description",
        accessor: (row) => (!row.name ? row.description : row.name),
        Cell: ({ value }) => (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0 40px",
              fontSize: "14px",
            }}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ value }) => (
          <span
            style={{
              color: value > 0 ? "#59B17A" : "#E85050",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {value > 0 ? `${value}` : value}
          </span>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnsRecommend, data: useMemo(() => data, [data]) });

  return (
    <>
      <TableWrap>
        <Title>Income/Expenses</Title>
        <Table {...getTableProps()}>
          <thead>
            <tr>
              <Th colSpan={3}>
                <IconWrapper>Today</IconWrapper>
              </Th>
            </tr>
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
