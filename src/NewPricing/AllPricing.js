import React, { Fragment } from 'react'
import './AllPricing.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Footer } from '../Footer/Footer'
import CheckIcon from '@mui/icons-material/Check';

export function AllPricing() {
    return (
        <Fragment>
            <div className="main_new_all_pricing">
                <div className="heading_all_pricing">
                    <h1>Ready to Choose Plan for Your Business?</h1>
                    <p>Choose the package that best suit you. Our services has friendly packages</p>
                    <div className="sub_all_pricing">
                        <p> Monthly</p>
                        <label htmlFor=""></label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <p> Yearly</p>
                    </div>
                </div>

                <div className="new_pricing_list">
                    <div className="new_pricing_cards_all">
                        <div className="name_of_price">
                            <div className="prices_new">
                                <h3>Pricing</h3>
                                <h4>SMS</h4>
                            </div>
                            <div className="sub_all_pricing">
                                <p> Monthly</p>
                                <label htmlFor=""></label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <p> Yearly</p>
                            </div>
                        </div>

                        <div className="cards_new_pricing_list">
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        FREE
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $0/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #F8D254" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PREMIUM
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $99/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <p style={{ display: "flex", marginTop: "15px" }}><CheckIcon />Figma responsive components</p>


                                    <Button variant="contained" sx={{
                                        textTransform: "unset",
                                        color: "black",
                                        backgroundColor: "#FFD26F",
                                        margin: "auto",
                                        marginTop: "30px",
                                        width: "90%",
                                        "&:hover": {
                                            color: "#101010",
                                            background: "#FFD26F",
                                        }
                                    }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PRO
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $199/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="new_pricing_list">
                    <div className="new_pricing_cards_all">
                        <div className="name_of_price">
                            <div className="prices_new">
                                <h3>Pricing</h3>
                                <h4>RCS</h4>
                            </div>
                            <div className="sub_all_pricing">
                                <p> Monthly</p>
                                <label htmlFor=""></label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <p> Yearly</p>
                            </div>
                        </div>

                        <div className="cards_new_pricing_list">
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        FREE
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $0/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #F8D254" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PREMIUM
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $99/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <p style={{ display: "flex", marginTop: "15px" }}><CheckIcon />Figma responsive components</p>


                                    <Button variant="contained" sx={{
                                        textTransform: "unset",
                                        color: "black",
                                        backgroundColor: "#FFD26F",
                                        margin: "auto",
                                        marginTop: "30px",
                                        width: "90%",
                                        "&:hover": {
                                            color: "#101010",
                                            background: "#FFD26F",
                                        }
                                    }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PRO
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $199/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="new_pricing_list">
                    <div className="new_pricing_cards_all">
                        <div className="name_of_price">
                            <div className="prices_new">
                                <h3>Pricing</h3>
                                <h4>Voice</h4>
                            </div>
                            <div className="sub_all_pricing">
                                <p> Monthly</p>
                                <label htmlFor=""></label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <p> Yearly</p>
                            </div>
                        </div>

                        <div className="cards_new_pricing_list">
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        FREE
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $0/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #F8D254" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PREMIUM
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $99/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <p style={{ display: "flex", marginTop: "15px" }}><CheckIcon />Figma responsive components</p>


                                    <Button variant="contained" sx={{
                                        textTransform: "unset",
                                        color: "black",
                                        backgroundColor: "#FFD26F",
                                        margin: "auto",
                                        marginTop: "30px",
                                        width: "90%",
                                        "&:hover": {
                                            color: "#101010",
                                            background: "#FFD26F",
                                        }
                                    }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PRO
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $199/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}
