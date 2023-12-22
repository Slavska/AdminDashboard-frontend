import { useState } from "react";
// import * as yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import {
  FieldModal,
  FormWrap,
  ModalBtn,
  ModalBtnCancel,
  SelectStyled,
  // SelectStyled,
  StyledErrorAuth,
  TitleModal,
  WrapBtnModal,
  WrapInputModal,
} from "../EditModal/EditModal.styled";

// const schema = yup.object({
//   en: yup
//     .string()
//     .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, "Invalid English format"),

//   ua: yup
//     .string()
//     .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "Invalid Ukrainian format"),
// });

const initialValues = {
  name: "",
  stock: "",
  price: "",
  category: "",
  suppliers: "",
};
const categoriesOptions = [
  "Medicine",
  "Heart",
  "Head",
  "Hand",
  "Leg",
  "Dental Care",
  "Skin Care",
];

const categoriesSelectOptions = categoriesOptions.map((category) => ({
  value: category,
  label: category,
}));

const AddForm = ({ onClose }) => {
  // const dispatch = useDispatch();
  // const categories = useSelector((state) => state.words.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedVerbType, setSelectedVerbType] = useState("");

  // const onSubmit = (values, { resetForm }) => {
  //   dispatch(
  //     wordsCreate({
  //       en: values.en,
  //       ua: values.ua,
  //       category: selectedCategory,
  //       ...(selectedCategory === "verb" && { isIrregular: selectedVerbType }),
  //     })
  //   );

  //   resetForm();
  //   onClose();
  // };

  const handleCategoryChange = (e) => {
    const category = e.value;
    if (category === "all") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  const onCancel = () => {
    onClose();
  };

  const customStyles = {
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      border: "none",
      outline: "none",
      boxShadow: "none",
      padding: "4px 14px",
      borderRadius: "14px",
      margin: "0px",
      cursor: "pointer",
      fontFamily: "Inter",
      background: "transparent",
      color: isSelected ? "#121417" : "rgba(18, 20, 23, 0.3)",
      ":hover": {
        color: "rgba(18, 20, 23, 1)",
      },
      ":active": {
        color: "rgba(18, 20, 23, 1)",
      },
      ":focus": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: "none",
      background: "transparent",
    }),
    menuList: (base) => ({
      ...base,
      background: "#59B17A",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,

      cursor: "pointer",
      borderRadius: "15px",
      fontFamily: "Inter",
      padding: "0px",
      background: "#59B17A",
      width: "224px",
      maxHeight: "140px",
      justifyСontent: "center",
      alignItems: "center",
      border: "1px solid rgba(252, 252, 252, 0.30)",

      color: "rgba(25, 26, 21, 0.30)",
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      color: "rgba(29, 30, 33, 1)",
      padding: "0px",
      margin: "0px",

      background: "transparent",
    }),

    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#FCFCFC",

      fontFamily: "Inter",
      cursor: "pointer",
      borderRadius: "14px",
      background: "transparent",
      ":active": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      background: "transparent",
      color: "rgba(18, 20, 23, 1)",

      ":hover": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      background: "transparent",
      borderRadius: "60px",
      boxShadow: "none",
      color: "rgba(29, 30, 33, 0.8)",
      fontFamily: "Inter",
      width: "100%",
      maxWidth: "224px",
      padding: "13px 18px",
      border: "1px solid rgba(29, 30, 33, 0.10)",

      ":active": {
        color: "rgba(18, 20, 23, 1)",
        border: "1px solid rgba(252, 252, 252, 1)",
      },
      ":focus": {
        border: "1px solid rgba(252, 252, 252, 1)",
      },
      ":hover": {
        background: "transparent",
        border: "1px solid rgba(252, 252, 252, 1)",
      },
      "@media screen and (min-width: 768px)": {
        width: "auto",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(29, 30, 33, 0.40)",
    }),
  };

  return (
    <>
      <TitleModal>Add a new product</TitleModal>
      <Formik
        initialValues={initialValues}
        // validationSchema={schema}
        // onSubmit={onSubmit}
      >
        <Form>
          <FormWrap>
            <WrapInputModal>
              <label htmlFor="en">
                <FieldModal
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Product Info"
                />
              </label>
              <ErrorMessage name="name">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="stock">
                <FieldModal
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="Stock"
                />
                <ErrorMessage name="stock">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="price">
                <FieldModal
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Price"
                />
                <ErrorMessage name="price">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <SelectStyled
              isSearchable={false}
              placeholder={"Categories"}
              name="category"
              options={categoriesSelectOptions}
              styles={customStyles}
              onChange={handleCategoryChange}
            />
            <WrapInputModal>
              <label htmlFor="suppliers">
                <FieldModal
                  type="text"
                  id="suppliers"
                  name="suppliers"
                  placeholder="Suppliers"
                />
                <ErrorMessage name="suppliers">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
          </FormWrap>
          <WrapBtnModal>
            <ModalBtn type="submit">Add</ModalBtn>
            <ModalBtnCancel type="button" onClick={onCancel}>
              Cancel
            </ModalBtnCancel>
          </WrapBtnModal>
        </Form>
      </Formik>
    </>
  );
};

export default AddForm;
