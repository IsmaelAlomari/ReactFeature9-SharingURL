// Styling

import { Logo, NavProduct, ThemeButton } from "../styles";
import Lightlogo from "../download.jpg"
import DarkLogo from "../light.png"

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      
      <Logo to="/" className="navbar-brand" >
      <img src={props.currentTheme === "Light" ? Lightlogo : DarkLogo} /></Logo>
      
      <div className="navbar-nav ml-auto">
        <NavProduct to="/products" className="nav-item" style={{ padding: "0.25em 1em" }}>
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
