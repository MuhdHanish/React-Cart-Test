import "./NavBar.css";
import PropTypes from "prop-types";
import { FiShoppingBag } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const NavBar = ({ show, setShow }) => {
  const products = useSelector((state) => state.cartReducer.products);
  return (
    <div className="navbar">
      <div className="navbar-input">
        <input type="text" placeholder="Search" spellCheck={false} />
        <RiSearch2Line style={{ fontSize: "19px" }} />
      </div>
      <div className="navbar-cartIcone">
        <FiShoppingBag style={{ fontSize: "22px" }} onClick={()=>{setShow(!show)}} />
        <div>{products?.length || 0}</div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
export default NavBar;
