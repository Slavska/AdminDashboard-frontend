import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const Table = styled.table`
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  background: #fff;
  overflow: hidden;
  border-spacing: 0;
  padding: 0 20px;
  width: calc((100vw - 40px));
  @media screen and (min-width: ${tablet}) {
    width: calc((100vw - 64px));
  }

  @media screen and (min-width: ${desktop}) {
    width: calc((100vw - 180px) / 2);
  }
  /* border-collapse: collapse; */
`;

export const Th = styled.th`
  color: rgba(29, 30, 33, 0.4);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #dbdbdb;
  padding: 24px 0;
`;
export const Title = styled.h2`
  color: #1d1e21;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  border: 0px solid rgba(29, 30, 33, 0.08);
  border-radius: 8px 8px 0px 0px;

  background: #e7f1ed;
  padding: 20px;

  width: calc((100vw - 40px));
  @media screen and (min-width: ${tablet}) {
    width: calc((100vw - 64px));
  }
  @media screen and (min-width: ${desktop}) {
    width: calc((100vw - 180px) / 2);
  }
`;
export const IconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Td = styled.td`
  color: #1d1e21;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.12;
  position: relative;
  padding: 14.5px 0;

  border-bottom: 1px solid #dbdbdb;
  background: #fcfcfc;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 16px;
  }
`;
export const Tr = styled.tr`
  padding-right: 20px;
  padding-left: 20px;
  &:last-child {
    td {
      border-bottom: none;
    }
  }
`;

export const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
