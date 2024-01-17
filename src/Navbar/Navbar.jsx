import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";


export default function Navbar() {
  const navigate = useNavigate();

  function handleEmpdetails() {
    navigate("/empdetails");
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar">
            <img
              src="image/LIT.jpg"
              alt="logo"
              className="img"
              onClick={() => {
                navigate("/home");
              }}
            />
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    HR Management
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleEmpdetails}>
                      HR Recruitment
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Vender Management
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Client Management
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Co-working Management
                      </a>
                    </li>
                  </ul>
                </li>




                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Employee Management
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleEmpdetails}>
                        Registartion
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Search
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Management
                      </a>
                    </li>
                  </ul>
                </li>


             
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Finance Management
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleEmpdetails}>
                        Registartion
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Search
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Management
                      </a>
                    </li>
                  </ul>
                </li>


              
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Assest Management
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleEmpdetails}>
                        Registartion
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Search
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Management
                      </a>
                    </li>
                  </ul>
                </li>



              </ul>



              


              <div className="userInfo">
                <FaUserCircle className="user_icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}