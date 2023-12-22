import styled from "styled-components";
import { breakpoints } from "../../shared/components/styles/breakpoints";

export const LogoWrap = styled.div`
  padding: 16px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`;
export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding: 138px 0;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: flex-start;
    padding: 174px 0;

    @media screen and (min-width: ${breakpoints.desktop}) {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 200px 0;
    }
  }
`;

export const WelcomePicture = styled.picture`
  width: 95px;
  height: 93px;
  position: absolute;
  top: -30%;
  right: 0;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 179px;
    height: 175px;
    top: -40%;
  }
`;

export const Text = styled.p`
  color: #1d1e21;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.21;
  padding-bottom: 40px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    color: #1d1e21;

    font-family: Inter;
    font-size: 54px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.11;
    max-width: 614px;
  }
`;

export const TextSpan = styled.span`
  color: #59b17a;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.21;
  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 54px;
    line-height: 1.11;
  }
`;

export const TextRegister = styled.p`
  display: none;
  @media screen and (min-width: ${breakpoints.tablet}) {
    color: rgba(18, 20, 23, 0.8);
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 16px;
    display: block;
  }
`;

export const WelcomeImg = styled.img`
  width: 95px;
  height: 93px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 179px;
    height: 175px;
  }
`;

export const PictureWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
