import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/authSelectors";
import {
  customers,
  page,
  perPage,
  totalPages,
} from "../../../redux/lists/listsSelector";
import { customerGet } from "../../../redux/lists/operations";

import {
  Button,
  FilterWrap,
  Input,
  Pagination,
  SvgDot,
  SvgFilter,
} from "./Customers.styled";
import sprite from "../../images/symbol-defs.svg";
// import Filter from "../Filter/Filter";
import { WrapCustomers } from "./Customers.styled";
import { CustomersTable } from "../CustomersTable/CustomersTable";

const PaginationDot = ({ onClick, isActive }) => (
  <SvgDot onClick={onClick}>
    <use href={sprite + "#icon-dot"}></use>
  </SvgDot>
);

export const Customers = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    if (loggedIn) {
      dispatch(customerGet({ page: 1, name: "" }));
    }
  }, [dispatch, loggedIn]);

  const customersList = useSelector(customers);
  const totalPageCount = useSelector(totalPages);
  const currentPage = useSelector(page);

  const handlePageChange = (newPage) => {
    dispatch(customerGet({ page: newPage, name: filterValue || "" }));
  };

  const renderPaginationDots = () => {
    const dots = [];
    for (let i = 1; i <= totalPageCount; i++) {
      dots.push(
        <PaginationDot
          key={i}
          onClick={() => handlePageChange(i)}
          isActive={i === currentPage}
        />
      );
    }
    return dots;
  };
  const handleFilterSubmit = () => {
    dispatch(customerGet({ page: 1, name: filterValue }));
  };
  return (
    <>
      <WrapCustomers>
        <FilterWrap>
          <Input
            type="text"
            placeholder="User Name"
            value={filterValue}
            onChange={handleFilterChange}
          />
          <Button onClick={handleFilterSubmit}>
            <SvgFilter>
              <use href={sprite + "#icon-filter"}></use>
            </SvgFilter>
            Filter
          </Button>
        </FilterWrap>
        <CustomersTable data={customersList} />
        <Pagination>{renderPaginationDots()}</Pagination>
      </WrapCustomers>
    </>
  );
};
