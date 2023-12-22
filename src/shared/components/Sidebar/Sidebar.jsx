import Navigation from "..//Navigation/Navigation";
import { LogOutWrap, SidebarWrap, StyledSidebar } from "./Sidebar.styled";
import { LogOut } from "../LogOut/LogOut";

const Sidebar = () => {
  return (
    <>
      <StyledSidebar>
        <SidebarWrap>
          <Navigation />
        </SidebarWrap>
        <LogOutWrap>
          <LogOut />
        </LogOutWrap>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
