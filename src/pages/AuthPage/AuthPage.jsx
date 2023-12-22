import { useParams } from "react-router-dom";
import Login from "../../shared/components/Login/Login";
import Registration from "../../shared/components/Registration/Registration";
import Logo from "../../shared/components/Logo/Logo";

import { GlobalStyles } from "../../shared/components/styles/GlobalStyles.styled";

import pillDesktop1x from "../../shared/images/pill1xDesktop.png";
import pillDesktop2x from "../../shared/images/pill2xDesktop.png";
import pillDesktop1xWebp from "../../shared/images/pill1xDesktop.webp";
import pillDesktop2xWebp from "../../shared/images/pill2xDesktop.webp";

import pillTablet1x from "../../shared/images/pill1xTablet.png";
import pillTablet2x from "../../shared/images/pill2xTablet.png";
import pillTablet1xWebp from "../../shared/images/pill1xTablet.webp";
import pillTablet2xWebp from "../../shared/images/pill2xTablet.webp";

import pillMobile1x from "../../shared/images/pill1xMobile.png";
import pillMobile2x from "../../shared/images/pill2xMobile.png";
import pillMobile1xWebp from "../../shared/images/pill1xMobile.webp";
import pillMobile2xWebp from "../../shared/images/pill2xMobile.webp";
import {
  LogoWrap,
  WelcomePicture,
  WrapperMain,
  Text,
  WelcomeImg,
  PictureWrap,
  TextSpan,
} from "./AuthPage.styled";

const AuthPage = () => {
  const { id } = useParams();

  return (
    <>
      <GlobalStyles />
      <Logo />
      <WrapperMain>
        {id === "login" && <Login />}
        {id === "registration" && <Registration />}
        <PictureWrap>
          <WelcomePicture>
            <source
              srcSet={pillDesktop2xWebp}
              type="image/webp"
              media="(min-width: 1200px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={pillDesktop1xWebp}
              type="image/webp"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={pillTablet2xWebp}
              type="image/webp"
              media="(max-width: 768px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={pillTablet1xWebp}
              type="image/webp"
              media="(max-width: 768px)"
            />
            <source
              srcSet={pillMobile2xWebp}
              type="image/webp"
              media="(max-width: 375px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={pillMobile1xWebp}
              type="image/webp"
              media="(max-width: 375px)"
            />
            <source
              srcSet={pillDesktop2x}
              media="(min-width: 1200px) and (min-resolution: 2dppx)"
            />
            <source srcSet={pillDesktop1x} media="(min-width: 1200px)" />
            <source
              srcSet={pillTablet2x}
              media="(max-width: 768px) and (min-resolution: 2dppx)"
            />
            <source srcSet={pillTablet1x} media="(max-width: 768px)" />
            <source
              srcSet={pillMobile2x}
              media="(max-width: 375px) and (min-resolution: 2dppx)"
            />
            <source srcSet={pillMobile1x} media="(max-width: 375px)" />
            <WelcomeImg src={pillMobile1x} alt="User" />
          </WelcomePicture>
          <Text>
            Your medication, delivered Say goodbye to all{" "}
            <TextSpan>your healthcare</TextSpan> worries with us
          </Text>
        </PictureWrap>
      </WrapperMain>
    </>
  );
};

export default AuthPage;
