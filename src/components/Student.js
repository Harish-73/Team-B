import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function Registration() {
    // const image="https://www.istockphoto.com/vector/letter-v-icon-formed-by-colorful-overlay-ribbon-gm609716678-104484457";
    const marginTop = {marginRight:"20px", marginLeft:"20px"};
    



            return(

            <div className="container-fluid bg-light text-dark">
                
                <div className="container-fluid bg-light text-dark text-center p-4">
                              <h1 className="display-2">Welcome to Our Website!!!</h1>
                              <h2 className="display-8">Catch up. Keep up. Pull ahead.</h2>
                              <p className="lead">We helps you achieve transformational change at scale and speed.</p>
                              <p className="footer"><Button variant="outline-success"> <a className="nav-link" href="https://www.virtusa.com/" target="_blank">Explore More !</a></Button></p>
                </div>

                {/* <div>                      
                              <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-1"
                                    aria-label="Search"
                                    style={{width:"750px", height:"40px", alignSelf:"center"}}
                                />
                                <Button variant="outline-success"><SearchIcon/></Button>
                              </Form>
                </div> */}

                {/* <div className="text-center p-5">
                    <Button variant="outline-primary"> 
                        <Link to={"/register"} className="nav-link"> Register Here <HowToRegIcon /></Link>
                    </Button>
                </div> */}
                <div className="text-center p-4 ">
                    <Button variant="outline-primary" className=" ms-5 me-5 fs-3" style={{"paddingBottom":"90px","paddingTop":"70px","paddingLeft":"30px","paddingRight":"30px"}} > 
                        <Link to={"/register"} className="nav-link" > <HowToRegIcon style={{"fontSize":"60px"}}/><br /> Register Here </Link>
                    </Button>{" "}
                    <Button variant="outline-primary" className=" ms-5 me-5 fs-3" style={{"paddingBottom":"90px","paddingTop":"70px","paddingLeft":"30px","paddingRight":"30px"}}> 
                        <Link to={"/login"} className="nav-link" > <AdminPanelSettingsIcon style={{"fontSize":"60px"}}/><br />Admin acess</Link>
                    </Button>
                
                </div>
            </div>

            );
            




}
