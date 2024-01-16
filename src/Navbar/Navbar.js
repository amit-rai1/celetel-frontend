import React, { Fragment, useState } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { MdArrowDropDown } from "react-icons/md";
import ListItem from "@mui/material/ListItem";
import imagelogo from '../Assets/image 1.png'


export function Navbar() {

    const navigateHome = useNavigate();
    const [isSidebar, setSidebar] = useState(false);

    function handleClick() {
        navigateHome('/')
        setSidebar(false);
    }

    const navigateLogin = useNavigate();

    function handleClickLogin() {
        navigateLogin('/login');
        setSidebar(false);
    }


    function handleToggleSidebar() {
        setSidebar(!isSidebar);
    }

    const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);

    function toggleProductDropdown() {
        setProductDropdownOpen(!isProductDropdownOpen);
    }

    function closeDrawer() {
        setSidebar(false);
    }

    // ...............................

    const [open, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!open);
    };

    return (
        <Fragment>
            <div className="main_nav">
                <div className="sub_nav">
                    <img onClick={handleClick} src={imagelogo} alt="" />
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <li>
                            <div className="dropdown open" onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
                                <button className="btn btn-link dropdown-toggle" type="button" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "600", border: "none", backgroundColor: "transparent" }}>Products <MdArrowDropDown /></button>
                                {open
                                    ?
                                    <ul className="dropdown-menu" style={{ flexDirection: 'column' }}>
                                        <Link to={'/smssolutions'} onClick={closeDrawer}><li>SMS</li></Link>
                                        <Link to={'/connectwhatsapp'} onClick={closeDrawer}><li>WhatsApp</li></Link>
                                        <Link to={'/connectrcs'} onClick={closeDrawer}><li>RCS</li></Link>
                                        <Link to={'/voicesolutions'} onClick={closeDrawer}><li>Voice</li></Link>
                                        <Link to={'/verifications'} onClick={closeDrawer}><li>Verification</li></Link>
                                    </ul>
                                    : null
                                }
                            </div>
                        </li>

                        <Link to={'/prices'}><li>Pricing</li></Link>
                    </ul>
                </div>

                <div className="btn1">
                    <button onClick={handleClickLogin}>Log in</button>
                    <Link to={'/nextstep'}><button>Sign up</button></Link>
                </div>

                <div className="responsive_m">
                    <Link to={'/contact'}><button>Contact</button></Link>
                    <p onClick={handleToggleSidebar}><IoMenuOutline /></p>
                </div>

                <Drawer anchor="right" open={isSidebar} onClose={handleToggleSidebar}
                    PaperProps={{ style: { width: '60%', maxWidth: 800 } }}>
                    <List>
                        <ListItem>
                            <Link to={'/'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Home</p></Link>
                        </ListItem>
                        <ListItem>
                            <p style={{ color: 'black', fontWeight: '500' }}>
                                Product <MdArrowDropDown onClick={toggleProductDropdown} />
                                {isProductDropdownOpen && (
                                    <ul className="dropdown">
                                        <Link to={'/smssolutions'} onClick={closeDrawer}><li>SMS</li></Link>
                                        <Link to={'/connectwhatsapp'} onClick={closeDrawer}><li>WhatsApp</li></Link>
                                        <Link to={'/connectrcs'} onClick={closeDrawer}><li>RCS</li></Link>
                                        <Link to={'/voicesolutions'} onClick={closeDrawer}><li>Voice</li></Link>
                                        <Link to={'/verifications'} onClick={closeDrawer}><li>Verification</li></Link>
                                    </ul>
                                )}
                            </p>
                        </ListItem>

                        <ListItem>
                            <Link to={'/prices'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Pricing</p>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <p style={{ color: 'black', fontWeight: '500' }}>Contact</p>
                        </ListItem>
                        <ListItem>
                            <Link to={'/login'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Login</p></Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/nextstep'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Sign up</p></Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </Fragment>
    )
}
