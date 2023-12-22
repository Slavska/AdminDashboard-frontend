import {
  BtnMenu,
  LogOutWrap,
  SidebarWrap,
  SvgClose,
  SvgMenu,
  Wrap,
  WrapperHeader,
} from "./Header.styled";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { selectUserName } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import { LogOut } from "../LogOut/LogOut";
import sprite from "../../images/symbol-defs.svg";
import Sidebar from "../Sidebar/Sidebar";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  const name = useSelector(selectUserName);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn, name]);

  return (
    <div>
      <WrapperHeader>
        <Wrap>
          <BtnMenu onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <SvgClose>
                <use href={sprite + "#icon-x"}></use>
              </SvgClose>
            ) : (
              <SvgMenu>
                <use href={sprite + "#icon-menu"}></use>
              </SvgMenu>
            )}
          </BtnMenu>
          <Logo />
        </Wrap>
        <LogOutWrap>
          <LogOut />
        </LogOutWrap>
      </WrapperHeader>
      <SidebarWrap>
        <Sidebar />
      </SidebarWrap>
      {isMenuOpen && <Sidebar open={isMenuOpen} />}
    </div>
  );
};
