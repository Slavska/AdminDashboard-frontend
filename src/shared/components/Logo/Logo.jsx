import {
  LogoImg,
  LogoLink,
  LogoLinkId,
  LogoPicture,
  LogoText,
  Text,
  TextWrap,
} from "./Logo.styled";

import maskTablet1x from "../../images/mask1xTablet.png";
import maskTablet2x from "../../images/mask2xTablet.png";
import maskTablet1xWebp from "../../images/mask1xTablet.webp";
import maskTablet2xWebp from "../../images/mask2xTablet.webp";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserEmail,
} from "../../../redux/auth/authSelectors";
import { useParams } from "react-router-dom";

function Logo() {
  const { id } = useParams();
  const currentUser = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);
  return (
    <>
      {currentUser ? (
        <LogoLinkId to="/">
          <LogoPicture>
            <source
              srcSet={maskTablet2xWebp}
              type="image/webp"
              media="(min-resolution: 2dppx)"
            />
            <source srcSet={maskTablet1xWebp} type="image/webp" />
            <source srcSet={maskTablet2x} media="(min-resolution: 2dppx)" />
            <source srcSet={maskTablet1x} />
            <LogoImg src={maskTablet1x} alt="User" />
          </LogoPicture>
          <div>
            <LogoText>Medicine Store</LogoText>
            <TextWrap>
              <Text>
                {id === "dashboards" && "Dashboard"}
                {id === "orders" && "All orders"}
                {id === "customers" && "All customers"}
                {id === "suppliers" && "All suppliers"}
                {id === "products" && "All products"}
              </Text>
              <Text>{email}</Text>
            </TextWrap>
          </div>
        </LogoLinkId>
      ) : (
        <LogoLink to="/">
          <LogoPicture>
            <source
              srcSet={maskTablet2xWebp}
              type="image/webp"
              media="(min-resolution: 2dppx)"
            />
            <source srcSet={maskTablet1xWebp} type="image/webp" />
            <source srcSet={maskTablet2x} media="(min-resolution: 2dppx)" />
            <source srcSet={maskTablet1x} />
            <LogoImg src={maskTablet1x} alt="User" />
          </LogoPicture>
          <LogoText>E-Pharmacy</LogoText>
        </LogoLink>
      )}
    </>
  );
}

export default Logo;
