import React,{useEffect} from 'react';

import {Navbar, NavLink, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function NavigationBar() {
    const image="https://www.shutterstock.com/image-vector/vector-alphabet-neon-letter-v-600w-72453508.jpg";
    const marginTop = {marginLeft:"10px", marginBottom:"5px"};
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);

    },[location.pathname]
    )

        return(
        <Navbar bg="light" variant="light">
            <NavItem>
            <Link to={""} className="navbar-brand">{" "}
             <img src={image} width="30px" height="30px" style={marginTop} /> Student
            </Link>
            </NavItem>
            <Nav className="me-auto">
                    {/* <Link to={"register"} className="nav-link">Register</Link>
                    <Link to={"login"} className="nav-link">Admin</Link> */}
                
            </Nav>
            
        </Navbar>
        
        );

}
