import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Item = styled.li`
  border-radius: 8px;
  border: 1px solid rgba(29, 30, 33, 0.1);

  background: #fff;
  width: 157px;
  height: 98px;
  padding: 14px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 221px;
    height: 108px;
    padding: 14px 18px;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 240px;
  }
`;

export const TextTitle = styled.p`
  color: rgba(29, 30, 33, 0.4);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const TextNumber = styled.p`
  color: #1d1e21;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
`;

export const SvgIcons = styled.svg`
  width: 20px;
  height: 20px;
  stroke: rgba(29, 30, 33, 1);
  fill: #fff;
`;
