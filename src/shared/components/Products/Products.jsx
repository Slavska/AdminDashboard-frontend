import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/authSelectors";
import { page, products, totalPages } from "../../../redux/lists/listsSelector";
import { productsGet } from "../../../redux/lists/operations";

import {
  BtnAdd,
  BtnWrap,
  Button,
  DivPlus,
  FilterWrap,
  Input,
  Pagination,
  SvgDot,
  SvgFilter,
  SvgPlus,
} from "./Products.styled";
import sprite from "../../images/symbol-defs.svg";
import { WrapProducts } from "./Products.styled";
import { ProductsTable } from "../ProductsTable/ProductsTable";
import { Modal } from "../Modal/Modal";
import AddForm from "../Modal/AddProductModal/AddProductModal";

const PaginationDot = ({ onClick }) => (
  <SvgDot onClick={onClick}>
    <use href={sprite + "#icon-dot"}></use>
  </SvgDot>
);

export const Products = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    if (loggedIn) {
      dispatch(productsGet({ page: 1, name: "" }));
    }
  }, [dispatch, loggedIn]);

  const productsList = useSelector(products);
  const totalPageCount = useSelector(totalPages);
  const currentPage = useSelector(page);

  const handlePageChange = (newPage) => {
    dispatch(productsGet({ page: newPage, name: filterValue || "" }));
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
    dispatch(productsGet({ page: 1, name: filterValue }));
  };

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <WrapProducts>
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
          <BtnAdd onClick={handleAddButtonClick}>
            <DivPlus>
              <SvgPlus>
                <use href={sprite + "#icon-plus"}></use>
              </SvgPlus>
            </DivPlus>
            Add a new product
          </BtnAdd>
        </BtnWrap>
        <ProductsTable data={productsList} />
        <Pagination>{renderPaginationDots()}</Pagination>
        {isModalOpen && (
          <Modal onClose={closeModal} isOpen={isModalOpen}>
            <AddForm />
          </Modal>
        )}
      </WrapProducts>
    </>
  );
};
