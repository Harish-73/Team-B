import React, { useState } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import LoginFirebase from './components/LoginFirebase';
// import Login from './components/Login';
import Registration from './components/Registration';
import Student from './components/Student';
import Admin from './components/Admin';
import Candidate from './components/Candidate';
import {Container, Row, Col} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseContent';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import { db } from './firebaseContent'

export default function App() {
    const marginTop = {marginTop:"20px"};
    const [user, loading] = useAuthState(auth);
    const [access, setAccess] = useState(false);

  return (
    <Router>
        <NavigationBar/>
        <Container>
             <Row>
                <Col lg={12} style={marginTop}>
                    
                    <Routes>
                    {!loading && <Route exact path="/login" element={!user ? <LoginFirebase /> : <Admin />} />}
                        <Route path="/" element={<Student/>}/>
                        <Route path="/register" element={<Registration/>}/>
                        {/* <Route path="/login" element={<LoginForm/>}/> */}
                        {/* <Route path="/login" element={<Login/>}/> */}
                        {/* <Route path="/login" element={<Admin/>}/> */}
                        <Route path="/list" element={<Candidate/>}/>
                        <Route path="/edit/" element={<Registration/>}/>

                    {/* {!user &&
                        // <Route exact path="/signup" element={<Signup />} />
                    } */}
                    <Route path="*" element={<Navigate replace to="/login" />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
        {/* <Footer/> */}
    </Router>
  );
}
