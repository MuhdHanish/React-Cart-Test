import "./NavBar.css";
import PropTypes from "prop-types";
import { FiShoppingBag } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = ({ show, setShow }) => {
  const products = useSelector((state) => state.cartReducer.products);
  return (
    <div className="navbar">
      <div className="font-bold italic flex gap-3 items-center">
        React Shopping <span className="animate-spin"><FaReact/></span>
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
