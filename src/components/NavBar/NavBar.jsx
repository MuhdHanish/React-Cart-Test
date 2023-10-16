import "./NavBar.css";
import PropTypes from "prop-types";
import { FiShoppingBag } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";

const NavBar = ({show,setShow}) => {
  return (
    <div className="navbar">
      <div className="navbar-input">
        <input type="text" placeholder="Search" spellCheck={false} />
        <RiSearch2Line style={{ fontSize: "19px" }} />
      </div>
      <div className="navbar-cartIcone">
        <FiShoppingBag style={{ fontSize: "22px" }} onClick={()=>{setShow(!show)}} />
        <div>{8}</div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
export default NavBar;
