import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/authSelectors";
import {
  page,
  suppliers,
  totalPages,
} from "../../../redux/lists/listsSelector";
import { suppliersGet } from "../../../redux/lists/operations";

import {
  BtnAdd,
  BtnWrap,
  Button,
  FilterWrap,
  Input,
  Pagination,
  SvgDot,
  SvgFilter,
} from "./Suppliers.styled";
import sprite from "../../images/symbol-defs.svg";
import { WrapSuppliers } from "./Suppliers.styled";
import { SuppliersTable } from "../SuppliersTable/SuppliersTable";

const PaginationDot = ({ onClick, isActive }) => (
  <SvgDot onClick={onClick}>
    <use href={sprite + "#icon-dot"}></use>
  </SvgDot>
);

export const Suppliers = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    if (loggedIn) {
      dispatch(suppliersGet({ page: 1, name: "" }));
    }
  }, [dispatch, loggedIn]);

  const suppliersList = useSelector(suppliers);
  const totalPageCount = useSelector(totalPages);
  const currentPage = useSelector(page);

  const handlePageChange = (newPage) => {
    dispatch(suppliersGet({ page: newPage, name: filterValue || "" }));
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
    dispatch(suppliersGet({ page: 1, name: filterValue }));
  };
  return (
    <>
      <WrapSuppliers>
        <BtnWrap>
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

          <BtnAdd>Add a new suppliers</BtnAdd>
        </BtnWrap>
        <SuppliersTable data={suppliersList} />
        <Pagination>{renderPaginationDots()}</Pagination>
      </WrapSuppliers>
    </>
  );
};
