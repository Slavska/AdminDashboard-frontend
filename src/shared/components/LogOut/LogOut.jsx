import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../../redux/auth/operations";
import sprite from "../../images/symbol-defs.svg";
import { LogOutBtn, SvgLogOut, SvgWrapLogOut } from "./LogOut.styled";

export const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await dispatch(signOut());
      navigate("/login");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <>
      <SvgWrapLogOut>
        <LogOutBtn onClick={handleLogout}>
          <SvgLogOut>
            <use href={sprite + "#icon-logout"}></use>
          </SvgLogOut>
        </LogOutBtn>
      </SvgWrapLogOut>
    </>
  );
};
