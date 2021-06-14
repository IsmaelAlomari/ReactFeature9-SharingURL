// Styling

    
import { Logo, NavProduct, ThemeButton ,BsPlusCircle} from "../styles";
import Lightlogo from "../download.jpg"
import DarkLogo from "../light.png"
import { BsPlusSquareFill } from "react-icons/bs"
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      
      <Logo to="/" className="navbar-brand" >
      <img src={props.currentTheme === "Light" ? Lightlogo : DarkLogo} /></Logo>
      
      <div className="navbar-nav ml-auto">
        <NavProduct to="/products" className="nav-item" style={{ padding: "0.25em 1em" }}>
          Products
        </NavProduct>

        <NavProduct
        className="nav-item"
        to="/products/new"
        style={{ padding:"0.25em 1em"}}
        >

      <BsPlusSquareFill to="/products" className="navbar-brand" size="1.5em"/>
        </NavProduct>

        
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      
      </div>
    </nav>
  );
};

export default NavBar;


