import "./NavBar.css";
import { FiShoppingBag } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-input">
        <input type="text" placeholder="Search" spellCheck={false} />
        <RiSearch2Line style={{ fontSize: "19px" }} />
      </div>
      <div className="navbar-cartIcone">
        <FiShoppingBag style={{ fontSize: "22px" }} />
        <div>{8}</div>
      </div>
    </div>
  );
};

export default NavBar;
