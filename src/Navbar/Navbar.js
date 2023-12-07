import React, { Fragment, useState } from 'react'
import './Navbar.css';
import logo1 from '../Assets/logo1.png'
import { FaAngleDown } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { MdArrowDropDown } from "react-icons/md";
import ListItem from "@mui/material/ListItem";

export function Navbar() {

    const navigateHome = useNavigate();

    function handleClick() {
        navigateHome('/')
    }

    const navigateLogin = useNavigate();

    function handleClickLogin() {
        navigateLogin('/login');
    }

    const [isSidebar, setSidebar] = useState(false);
    function handleToggleSidebar() {
        setSidebar(!isSidebar);
    }

    const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);

    function toggleProductDropdown() {
        setProductDropdownOpen(!isProductDropdownOpen);
    }

    return (
        <Fragment>
            <div className="main_nav">
                <div className="sub_nav">
                    <img onClick={handleClick} src={logo1} alt="" />
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <li>Products <FaAngleDown /></li>
                        <li>Pricing</li>
                    </ul>
                </div>

                <div className="btn1">
                    <button onClick={handleClickLogin}>Log in</button>
                    <Link to={'/signup'}><button>Sign up</button></Link>
                </div>

                <div className="responsive_m">
                    <Link to={'/contact'}><button>Contact</button></Link>
                    <p onClick={handleToggleSidebar}><IoMenuOutline /></p>
                </div>

                <Drawer anchor="right" open={isSidebar} onClose={handleToggleSidebar}
                    PaperProps={{ style: { width: '60%', maxWidth: 800 } }}>
                    <List>
                        <ListItem>
                            <Link to={'/'}><p style={{ color: 'black', fontWeight: '500' }}>Home</p></Link>
                        </ListItem>
                        <ListItem>
                            <p style={{ color: 'black', fontWeight: '500' }}>
                                Product <MdArrowDropDown onClick={toggleProductDropdown} />
                                {isProductDropdownOpen && (
                                    <ul className="dropdown">
                                        <Link to={'/smssolutions'}><li>SMS</li></Link>
                                        <Link to={'/connectwhatsapp'}><li>WhatsApp</li></Link>
                                        <Link to={'/connectrcs'}><li>RCS</li></Link>
                                        <Link to={'/voicesolutions'}><li>Voice</li></Link>
                                        <Link to={'/verifications'}><li>Verification</li></Link>
                                    </ul>
                                )}
                            </p>
                        </ListItem>

                        <ListItem>
                            <p style={{ color: 'black', fontWeight: '500' }}>Pricing</p>
                        </ListItem>
                        <ListItem>
                            <p style={{ color: 'black', fontWeight: '500' }}>Contact</p>
                        </ListItem>
                        <ListItem>
                            <Link to={'/login'}><p style={{ color: 'black', fontWeight: '500' }}>Login</p></Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/signup'}><p style={{ color: 'black', fontWeight: '500' }}>Sign up</p></Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </Fragment>
    )
}
