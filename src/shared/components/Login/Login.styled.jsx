import { Field, Form } from "formik";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: start;
  }
`;

export const StyledWrapInputAuth = styled.div`
  position: relative;
`;

export const StyledInputAuth = styled(Field)`
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  background: transparent;
  margin-bottom: 14px;
  &.no-bottom-padding {
    margin-bottom: 0;
  }
  outline: none;
  transition: all 250ms linear;
  background: transparent;
  color: #1d1e21;
  width: calc(100vw - 48px);
  max-width: 500px;
  line-height: 1.5;
  padding: 16px 40px 16px 18px;
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  &:hover,
  &:focus {
    border: 1px solid #59b17a;
    outline: none;
    opacity: 1;
    transition: outline 250ms linear, opacity 250ms linear;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 500px;
  }
`;

export const StyledLabelAuth = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: black;
  pointer-events: none;
  transition: all 250ms linear;
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: 50px;
  left: 5px;
  font-size: 10px;
  font-weight: 400;
  font-family: Inter;
  color: #59b17a;
  transition: all 250ms linear;
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 10px;
  right: 18px;
  cursor: pointer;
`;

export const StyledEyeIcon = styled.svg`
  transition: color 0.3s;
  width: 20px;
  height: 20px;
  stroke: rgba(18, 20, 23, 1);
  fill: transparent;
`;

export const StyledEyeIconVis = styled.svg`
  transition: color 0.3s;
  width: 20px;
  height: 20px;
  stroke: rgba(18, 20, 23, 1);
  fill: transparent;
`;

export const StyledWrapAuthBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const StyledBtnAuthAccent = styled.button`
  display: flex;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  border-radius: 60px;
  background: #59b17a;
  padding: 13px 18px;
  justify-content: center;
  align-items: center;

  border: none;
  width: calc(100vw - 40px);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background: #a5c0b8;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 500px;
  }
`;

export const LinkItem = styled(NavLink)`
  color: #1d1e21;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  text-decoration: underline;
  transition: all 250ms linear;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  &:hover,
  &:focus {
    opacity: 0.4;
  }
`;
