import React, { useEffect, useState } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo_plateforme.png';
import { GrProjects } from "react-icons/gr";
import { FaRProject } from 'react-icons/fa';
import { TbReportSearch } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { SiLibreofficewriter } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Md6FtApart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, logoutUser } from '../redux/action/authAction';

function Header() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const handleMenuClick = () => {
    setShow(false);
  };
  const user = useSelector(state => state.users.user);

  return (
    <header className="header">
      <Link to="/" onClick={handleMenuClick}>
        <img src={logo} alt="Logo de l'application" style={{ height: '70px' }} />
      </Link>
      <div>
        <nav className="nav" >
          <Button className="resetTe" style={{ fontSize: "1.1rem", color: '#030303', fontWeight: 'bold', cursor: 'pointer', appearance: 'none', backgroundColor: 'transparent', border: 'none', margin: '0', padding: '0', outline: 'inherit', marginRight: '30px', fontFamily: 'Zoho_Puvi_Regular' }}>
            {user?.name ?
              <div style={{ display: "flex" }}>
                <span className="Btnnn">Bonjour {user?.name}</span>


                <button className="Btn" onClick={() => dispatch(logoutUser(navigate))}>
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                  </div>
                  <div className="text">Logout</div>
                </button>

              </div>
              :
              <Link to="/login" style={{ fontSize: "1.1rem", color: '#030303', fontWeight: 'bold', cursor: 'pointer', appearance: 'none', backgroundColor: 'transparent', border: 'none', margin: '0', padding: '0', outline: 'inherit', marginRight: '30px', textDecoration: 'none', fontFamily: 'Zoho_Puvi_Regular' }}>Login</Link>}
          </Button>
          
          <button className="Btn" onClick={handleShow}>
                  <div className="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="menu-icon">
                    <path d="M96 240h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"/>
                    </svg>
                  </div>
                  <div className="text">Menu</div>
                </button>
        </nav>
        <Offcanvas placement='end' show={show} onHide={handleClose} style={{ width: "300px" }}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <aside className="sidebar">
              <div className="logo">
                <img src={logo} alt="Logo de l'application" style={{ height: '40px', marginRight: '5px' }} />
                <span className="logo-name">P.T.Platform</span>
              </div>
              <hr />
              <nav>
                <ul>
                  <li>
                    <div className="home-icon">
                      <div className="roof">
                        <div className="roof-edge" />
                      </div>
                      <div className="front" />
                    </div>
                  </li>
                  {user?.role === 'admin' && (
                    <>
                      
                      <li>
                        <div className="work-icon">
                          <div className="paper" />
                          <div className="lines" />
                          <div className="lines" />
                          <div className="lines" />
                        </div>
                        <Link to="/new-project" onClick={handleMenuClick}> <FaRProject style={{ color: "#943ABA", marginRight: '10px' }} /> New Project</Link>
                      </li>
                      <li>
                        <Link to="/projects" onClick={handleMenuClick}> <GrProjects style={{ color: "#943ABA", marginRight: '10px' }} /> Projects</Link>
                      </li>
                      <li>
                        <div className="mail-icon">
                          <div className="mail-base">
                            <div className="mail-top" />
                          </div>
                        </div>
                        <Link to="/reports" onClick={handleMenuClick}> <TbReportSearch style={{ color: "#943ABA", marginRight: '10px' }} /> Reports</Link>
                      </li>
                      <li>
                        <Link to="/budget" onClick={handleMenuClick}> <LiaMoneyCheckAltSolid style={{ color: "#943ABA", marginRight: '10px' }} /> Budget Management</Link>
                      </li>
                      <li>
                        <Link to="/partners" onClick={handleMenuClick}> <Md6FtApart style={{ color: "#943ABA", marginRight: '10px' }} /> Partner Management</Link>
                      </li>
                    </>
                  )}
                  {user?.role === 'user' && (
                    <>
                      <li>
                        <Link to="/projects" onClick={handleMenuClick}> <GrProjects style={{ color: "#943ABA", marginRight: '10px' }} /> Projects</Link>
                      </li>                      
                      <li>
                        <Link to="/myprojects" onClick={handleMenuClick}><IoNotifications style={{ color: "#943ABA", marginRight: '10px' }} /> My Projects <span style={{color:"#cf0883"}}>{user?.projects?.length}</span></Link>
                      </li>
                      <li>
                        <Link to="/contact-us" onClick={handleMenuClick}> <RiContactsFill style={{ color: "#943ABA", marginRight: '10px' }} /> Contact Us</Link>
                      </li>
                    </>
                  )}
                  {user?.role !== 'admin' && user?.role !== 'user' && (
                    <>
                      <li>
                        <Link to="/projects" onClick={handleMenuClick}> <GrProjects style={{ color: "#943ABA", marginRight: '10px' }} /> Projects</Link>
                      </li>
                      <li>
                        <Link to="/partners" onClick={handleMenuClick}> <Md6FtApart style={{ color: "#943ABA", marginRight: '10px' }} /> Partner Management</Link>
                      </li>
                      <li>
                        <Link to="/contact-us" onClick={handleMenuClick}> <RiContactsFill style={{ color: "#943ABA", marginRight: '10px' }} /> Contact Us</Link>
                      </li>
                    </>
                  )}

                </ul>

              </nav>

            </aside>

          </Offcanvas.Body>

        </Offcanvas>

      </div>
    </header>
  );
}

export default Header;



