import { StyledNav, NavItem, NavDiv, SvgNav } from "./Navigation.styled";
import sprite from "../../images/symbol-defs.svg";

function Navigation() {
  return (
    <>
      <StyledNav>
        <NavDiv>
          <NavItem to="/dashboard/dashboards" replace>
            <SvgNav>
              <use href={sprite + "#icon-dashboard"}></use>
            </SvgNav>
          </NavItem>
          <NavItem to="/dashboard/orders" replace>
            <SvgNav>
              <use href={sprite + "#icon-shopping"}></use>
            </SvgNav>
          </NavItem>
          <NavItem to="/dashboard/products" replace>
            <SvgNav>
              <use href={sprite + "#icon-mixture"}></use>
            </SvgNav>
          </NavItem>
          <NavItem to="/dashboard/customers" replace>
            <SvgNav>
              <use href={sprite + "#icon-pharmacy"}></use>
            </SvgNav>
          </NavItem>
          <NavItem to="/dashboard/suppliers" replace>
            <SvgNav>
              <use href={sprite + "#icon-user"}></use>
            </SvgNav>
          </NavItem>
        </NavDiv>
      </StyledNav>
    </>
  );
}
export default Navigation;
