import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { SidebarData } from "./SideBarData";
import "./SideBar.css";

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sidebar);

  let navigate = useNavigate();
  const AllWinesPage = () => {
    navigate(`/allwines`);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars
            style={{ backgroundColor: "black", color: "white" }}
            onClick={showSideBar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose
                style={{ backgroundColor: "black", color: "white" }}
              />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
