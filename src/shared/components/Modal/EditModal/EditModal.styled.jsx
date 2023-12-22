import styled from "styled-components";
import { Field } from "formik";
import { breakpoints } from "../../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const TitleModal = styled.h1`
  color: #1d1e21;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.16;
  margin-bottom: 40px;
`;

export const FieldModal = styled(Field)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  background: #fff;
  padding: 13px 18px;
  width: 224px;

  color: rgba(29, 30, 33, 1);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }

  &:hover,
  &:focus,
  &.active {
    border: 1px solid rgba(29, 30, 33, 0.9);
  }
`;

export const WrapLangModal = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TextLangModal = styled.p`
  color: #fcfcfc;

  font-family: "Medium";
  font-size: 16px;
  line-height: 1.5;
`;

export const WrapInputModal = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 224px;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: 58px;
  left: 5px;
  font-size: 12px;
  font-weight: 400;
  color: #fcfcfc;
  transition: all 250ms linear;
`;

// export const WrapFormalModal = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 40px;
//   gap: 18px;
//   margin-bottom: 32px;
//   @media screen and (min-width: ${tablet}) {
//     margin-top: 70px;
//   }
// `;

export const ModalBtn = styled.button`
  display: flex;
  padding: 13px 52px;
  justify-content: center;
  align-items: center;
  color: #fff;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  width: 133px;
  border: none;
  border-radius: 60px;
  background: #59b17a;

  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
`;

export const ModalBtnCancel = styled.button`
  display: flex;
  padding: 13px 43px;
  justify-content: center;
  align-items: center;
  color: rgba(29, 30, 33, 0.4);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  border: none;
  border-radius: 60px;
  background: rgba(29, 30, 33, 0.1);
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
`;

export const WrapBtnModal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  @media screen and (min-width: ${tablet}) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
`;

export const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(252, 252, 252, 0.2);
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 11px;
    height: 11px;
    margin: 2px;
  }
  &:checked::after {
    background-color: rgba(252, 252, 252, 1);
  }
  &:hover::after {
    background-color: rgba(252, 252, 252, 1);
  }
  &:focus {
    border: 2px solid rgba(252, 252, 252, 1);
    outline: none;
  }
`;
export const StyledLabel = styled.label`
  color: #fcfcfc;
  display: flex;
  font-family: "Regular";
  font-size: 14px;
  line-height: normal;
  cursor: pointer;

  gap: 8px;
  /* &::after {
    margin-left: 8px;
    width: 12px;
    height: 15px;
    display: inline-block;
    content: " ";
    -webkit-mask: url("/lock.svg") no-repeat 50% 50%;
    -webkit-mask-size: cover;
    background-color: yellowgreen;
  } */
`;
export const WrapRadioBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 8px;
`;

export const PictureModal = styled.picture`
  width: 152px;
  height: 121px;
`;

export const Img = styled.img`
  width: 152px;
  height: 121px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ListWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const AllWrap = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row;
`;

export const ListModal = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: #fcfcfc;

  font-family: "Medium";
  font-size: 20px;

  line-height: normal;
`;

export const FormWrap = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  flex-wrap: wrap;
  width: 224px;
  height: 170px;
`;

import Select from "react-select";

export const SelectStyled = styled(Select)``;
