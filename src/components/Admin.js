import React from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { logout } from '../firebaseContent'
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Registation() {

    const handleLogout = async () => {
        await logout()
    }
            return(

            <div className="container-fluid bg-light text-dark">
                <Button style={{"justify-content":"end","display": "flex","margin-left": "101%"}}
                variant="outline-primary"
                // className="justify-content-end;"
                onClick={handleLogout}>
                <AccountCircleIcon /> Logout
                </Button>
                
                <div className="container-fluid bg-light text-dark text-center p-4">
                              <h1 className="display-2">Welcome Admin!!!</h1>
                              <h2 className="display-8"></h2>
                              <p className="lead">Creating user accounts and performing access control.<br />Managing Candidate records and Dealing with queries.</p>
                              <p className="footer"><Button variant="outline-success"> <a className="nav-link" href="https://www.virtusa.com/" target="_blank">Explore More !</a></Button></p>
                </div>

                {/* <div>                      
                              <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-1"
                                    aria-label="Search"
                                    style={{width:"750px", height:"40px", alignSelf:"center", marginLeft:"230px"}}
                                />
                                <Button variant="outline-success"><SearchIcon/></Button>
                              </Form>
                </div> */}
                <Row>
                <div className="text-center p-4 ">
                    <Button variant="outline-primary" className=" ms-5 me-5 fs-3" style={{"paddingBottom":"90px","paddingTop":"70px","paddingLeft":"30px","paddinRight":"30px"}} > 
                        <Link to={"/register"} className="nav-link" > <AddBoxIcon style={{"fontSize":"60px"}}/><br /> Add Candidate </Link>
                    </Button>{" "}
                    <Button variant="outline-primary" className=" ms-5 me-5 fs-3" style={{"paddingBottom":"90px","paddingTop":"70px","paddingLeft":"30px","paddingRight":"30px"}}> 
                        <Link to={"/list"} className="nav-link" > <ManageAccountsIcon style={{"fontSize":"60px"}}/><br />View Candidate</Link>
                    </Button>
                
                </div>
                </Row>
            </div>

            );
            




}
