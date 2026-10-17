import "./header.css";
import logo from "../../img/logo/logo.png";
function Header() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="Logo" />
      <ul className="navitems">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">Our Menu</a>
        </li>
        <li>
          <a href="#!">Foods</a>
        </li>
        <li>
          <a href="#!">About us</a>
        </li>
        <li>
          <a href="#!">Contact us</a>
        </li>
      </ul>
      <button className="navbtn">
        <p>Login</p>
      </button>
    </div>
  );
}
export default Header;
