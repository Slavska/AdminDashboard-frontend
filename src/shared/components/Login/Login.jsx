import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

import sprite from "../../images/symbol-defs.svg";
import { signin } from "../../../redux/auth/operations.js";

import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  StyledWrapAuthBtn,
  WrapperForm,
  AuthFormPasswordIcon,
  StyledEyeIcon,
  StyledEyeIconVis,
  LinkItem,
} from "./Login.styled.jsx";

let schema = yup.object({
  password: yup
    .string()
    .required("Please enter a password")
    .min(7, "Min length 7 symbols")
    .max(10, "Max length 10 symbols")
    .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/, "Letters and numbers")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),

  email: yup
    .string()
    .required("Please enter an email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid email address"),
});

const initialValues = {
  email: "",
  password: "",
  showPassword: false,
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(signin({ email, password }))
      .unwrap()
      .then(() => navigate("/dashboard/dashboards"))
      .then(() => resetForm());
  };
  return (
    <>
      <WrapperForm>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <StyledFormAuth>
            <StyledWrapInputAuth>
              <StyledInputAuth
                type="email"
                name="email"
                placeholder="Email address"
              />
              <StyledLabelAuth></StyledLabelAuth>
              <ErrorMessage name="email">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </StyledWrapInputAuth>
            <StyledWrapInputAuth>
              <StyledInputAuth
                className="no-bottom-padding"
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              <StyledLabelAuth></StyledLabelAuth>
              <ErrorMessage name="password">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
              <AuthFormPasswordIcon onClick={handleTogglePassword}>
                {showPassword ? (
                  <StyledEyeIcon>
                    <use href={sprite + "#icon-eye"}></use>
                  </StyledEyeIcon>
                ) : (
                  <StyledEyeIconVis>
                    <use href={sprite + "#icon-eye-off"}></use>
                  </StyledEyeIconVis>
                )}
              </AuthFormPasswordIcon>
            </StyledWrapInputAuth>
            <StyledWrapAuthBtn>
              <StyledBtnAuthAccent type="submit" disabled={isLoading}>
                Log in
              </StyledBtnAuthAccent>
            </StyledWrapAuthBtn>
            <LinkItem to="/registration">Register</LinkItem>
          </StyledFormAuth>
        </Formik>
      </WrapperForm>
    </>
  );
}

export default Login;
