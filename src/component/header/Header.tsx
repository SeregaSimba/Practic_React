import "./Header.css";
import { Link } from "react-router-dom";

function navigationClick() {
  const nav = document.getElementById("nav-header");
  nav?.classList.toggle("nav-header-none");
  nav?.classList.toggle("nav-header");
}

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container-header">
          <div className="div-icon">
            <div className="icon-header">icon</div>
          </div>
          <div className="div-title">
            <h1>Tu-Du List</h1>
          </div>
          <div className="div-navigation">
            <div className="button-bac">
              <button className="global-style-back">style background</button>
            </div>
            <div onClick={navigationClick} className="container-nav-header">
              Navigation
            </div>
            <nav id="nav-header" className="nav-header-none">
              <Link className="link" to={"/Registration"}>
                Registration
              </Link>
              <Link className="link" to={"/TuDu"}>
                Tu-Du
              </Link>
              <Link className="link" to={"/About"}>
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
