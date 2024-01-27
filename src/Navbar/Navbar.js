import React, { Fragment, useState } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { FaChevronDown } from "react-icons/fa";
import ListItem from "@mui/material/ListItem";
import imagelogo from '../Assets/main_logo.svg'
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(3),
        minWidth: 300,
        height: 200,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <div className="main_nav">
                <div className="sub_nav">
                    <img onClick={handleClick} src={imagelogo} alt="" />
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <li>
                            <div className="dropdown_products"
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                disableElevation
                                onMouseEnter={handleClickDrop}
                                endIcon={<KeyboardArrowDownIcon />}>Products <FaChevronDown />
                            </div>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}>
                                <Link to={'/smssolutions'} style={{ color: "black" }}><MenuItem onClick={handleClose} disableRipple>
                                    <li>SMS</li>
                                </MenuItem></Link>
                                <Link to={'/connectwhatsapp'} style={{ color: "black" }}><MenuItem onClick={handleClose} disableRipple>
                                    <li>WhatsApp</li>
                                </MenuItem></Link>
                                <Divider sx={{ my: 0.5 }} />
                                <Link to={'/connectrcs'} style={{ color: "black" }}><MenuItem onClick={handleClose} disableRipple>
                                    <li>RCS</li>
                                </MenuItem></Link>
                                <Link to={'/voicesolutions'} style={{ color: "black" }}><MenuItem onClick={handleClose} disableRipple>
                                    <li>Voice</li>
                                </MenuItem></Link>
                                <Link to={'/verifications'} style={{ color: "black" }}><MenuItem onClick={handleClose} disableRipple>
                                    <li>Verification</li>
                                </MenuItem></Link>
                            </StyledMenu>
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
                            <p style={{ color: 'black', fontWeight: '500' }} onClick={toggleProductDropdown}>
                                Product <FaChevronDown />
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
