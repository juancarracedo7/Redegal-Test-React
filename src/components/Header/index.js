import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";



export default function Header() {
  const cartNumber = useSelector((state) => state.cart);

  let deactivatedStyle = {
    display: "none",
  };


  const cartNumberLocal = JSON.parse(localStorage.getItem("cartNumber"))
  console.log("cartNumberLocal", cartNumberLocal);

  return (
    <>
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Market Place</Link>
      </div>
      <div>
        {" "}
        <BsCart3></BsCart3> { cartNumberLocal  || cartNumber} items
      </div>
    </div>
      <div className={styles.breadcrumbs}>
      <NavLink to="/">Home &nbsp; </NavLink>
      <NavLink
      onClick={(e) => {e.preventDefault()}}
        to="/details"
        style={({ isActive }) => (isActive ? undefined : deactivatedStyle)}
      >
         / Details
      </NavLink>
      </div>
    </>
  );
}
