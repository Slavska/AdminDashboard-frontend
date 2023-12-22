import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModal = styled.div`
  border-radius: 8px;

  background-color: #85aa9f;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  border-radius: 12px;
  background: #fff;
  z-index: 9999;
  /* min-width: 335px;
  min-height: 300px; */
  max-width: 536px;
  max-height: 412;
  /* @media (max-width: 374px) {
    min-width: 50%;
  } */
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin-left: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const Svg = styled.svg`
  stroke: rgba(29, 30, 33, 1);
  transition: all 250ms linear;
  &:hover,
  &:focus {
    stroke: rgba(29, 30, 33, 0.5);
  }
`;
