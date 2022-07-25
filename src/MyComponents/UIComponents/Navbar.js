import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
function Navbar(props) {
  useEffect(() => {
    updateActiveStatus();
  }, []);
  const updateActiveStatus = () => {
    const page = document.getElementById(props.landedPage);
    if (props.landedPage === "home") {
      page.classList.add("active");
    } else if (props.landedPage === "allnews") {
      page.classList.add("active");
    } else if (props.landedPage === "about") {
      page.classList.add("active");
    }
  };
  return (
    <>
      <div className="container-fluid bg-dark">
        <nav className="navbar sticky-top container navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <span className="text-danger">Newsi</span>fy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase"
                    id="home"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase"
                    id="allnews"
                    to="/allnews"
                  >
                    All News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase"
                    id="about"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
export default Navbar;
