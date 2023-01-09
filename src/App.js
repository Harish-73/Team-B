import React, { useState } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import LoginFirebase from './components/LoginFirebase';
// import Login from './components/Login';
import Registration from './components/Registration';
import Update from './components/Update';
import Student from './components/Student';


import ErrorHandler from './components/ErrorBoundary';
import City from './components/ErrorBoundary';
import Sample from './components/Sample';


import Admin from './components/Admin';
import Candidate from './components/Candidate';
import {Container, Row, Col} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout} from './firebaseContent';
import {ErrorBoundary} from 'react-error-boundary'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import { db } from './firebaseContent'

export default function App() {
    const marginTop = {marginTop:"20px"};
    const [user, loading] = useAuthState(auth);
    // const [access, setAccess] = useState(false);
    const [dataId, setDataId] = useState("");

    const getDataIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setDataId(id);
    };
    window.addEventListener("beforeunload", (ev) => {
        // ev.preventDefault();
        return logout();
    });

  return (
    // <Router>
    //     <NavigationBar/>
    //     <Container>
    //          <Row>
    //             <Col lg={12} style={marginTop}>
                    
    //                 <Routes>
    //                 {!loading && <Route exact path="/login" element={!user ? <LoginFirebase /> : <Admin />} />}
    //                     <Route path="/" element={<Student/>}/>
    //                     {/* <Route path="/register" element={<Registration id={dataId} setDataId={setDataId}/>}/> */}
    //                     {/* <Route path="/login" element={<LoginForm/>}/> */}
    //                     {/* <Route path="/login" element={<Login/>}/> */}
    //                     <Route path="/login" element={<Admin/>}/>
    //                     <Route path="/list" element={<Candidate getDataId={getDataIdHandler}/>}/>
    //                     {/* <Route path="/edit/" element={<Registration/>}/> */}
    //                     <Route path="/register" element={<Update id={dataId} setDataId={setDataId}/>}/>
    //                 {/* {!user &&
    //                     // <Route exact path="/signup" element={<Signup />} />
    //                 } */}
    //                 <Route path="*" element={<Navigate replace to="/login" />} />
    //                 </Routes>
    //             </Col>
    //         </Row>
    //     </Container>  
    //     {/* <Footer/> */}
    // </Router>
    <div>
    <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Sample heroName='BatMan'></Sample>
        <Sample heroName='Joker'></Sample>
      
    </ErrorBoundary>
    </div>  
    );
}


// import { render } from 'react-dom';
// // import React from 'react';
// // import { TablePagination } from 'react-pagination-table';
// import TablePagination from '@mui/material/TablePagination';
 
 
// export default function App () {

//     const Header = ["Name", "Age", "Size", "Phone", "Gender" ];

//     const data = [
//         { size: ["L", "M"], phone: 1234567, gender: "Male", age: 20, name:"Ben" },
//         { size: ["L", "M", "XL"], phone: 1234567, gender: "Female", age: 22, name:"Ken" },
//         { size: ["L", "S"], phone: 1234567, gender: "Female", age: 23, name:"Jay" },
//         { size: ["M", "S"], phone: 1234567, gender: "Male", age: 26, name:"Chip" },
//         { size: ["XL", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Lee" },
//         { size: ["L", "M", "S", "XS"], phone: 1234567, gender: "Female", age: 30, name:"Frank" },
//         { size: ["S", "L"], phone: 1234567, gender: "Male", age: 23, name:"CoCo" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 20, name:"Fake" },
//         { size: ["XS", "L"], phone: 1234567, gender: "Male", age: 26, name:"Dump" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 27, name:"Ocean" },
//         { size: ["S", "XL"], phone: 1234567, gender: "Male", age: 20, name:"Polo" },
//         { size: ["M", "XL"], phone: 1234567, gender: "Female", age: 21, name:"Queen" },
//         { size: ["L", "M"], phone: 1234567, gender: "Female", age: 20, name:"Bump" },
//         { size: ["L", "M", "S", "XL"], phone: 1234567, gender: "Male", age: 22, name:"Judy" },
//         { size: ["XL", "M"], phone: 1234567, gender: "Female", age: 24, name:"Ryan" },
//         { size: ["L", "S"], phone: 1234567, gender: "Female", age: 25, name:"Flow" },
//         { size: ["S", "M"], phone: 1234567, gender: "Female", age: 31, name:"Ray" },
//         { size: ["L", "M", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Yen" },
//         { size: ["XL", "M", "S"], phone: 1234567, gender: "Male", age: 21, name:"Gray" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 22, name:"Tom" },
//         { size: ["L", "M"], phone: 1234567, gender: "Male", age: 20, name:"Ben" },
//         { size: ["L", "M", "XL"], phone: 1234567, gender: "Female", age: 22, name:"Ken" },
//         { size: ["L", "S"], phone: 1234567, gender: "Female", age: 23, name:"Jay" },
//         { size: ["M", "S"], phone: 1234567, gender: "Male", age: 26, name:"Chip" },
//         { size: ["XL", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Lee" },
//         { size: ["L", "M", "S", "XS"], phone: 1234567, gender: "Female", age: 30, name:"Frank" },
//         { size: ["S", "L"], phone: 1234567, gender: "Male", age: 23, name:"CoCo" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 20, name:"Fake" },
//         { size: ["XS", "L"], phone: 1234567, gender: "Male", age: 26, name:"Dump" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 27, name:"Ocean" },
//         { size: ["S", "XL"], phone: 1234567, gender: "Male", age: 20, name:"Polo" },
//         { size: ["M", "XL"], phone: 1234567, gender: "Female", age: 21, name:"Queen" },
//         { size: ["L", "M"], phone: 1234567, gender: "Female", age: 20, name:"Bump" },
//         { size: ["L", "M", "S", "XL"], phone: 1234567, gender: "Male", age: 22, name:"Judy" },
//         { size: ["XL", "M"], phone: 1234567, gender: "Female", age: 24, name:"Ryan" },
//         { size: ["L", "S"], phone: 1234567, gender: "Female", age: 25, name:"Flow" },
//         { size: ["S", "M"], phone: 1234567, gender: "Female", age: 31, name:"Ray" },
//         { size: ["L", "M", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Yen" },
//         { size: ["XL", "M", "S"], phone: 1234567, gender: "Male", age: 21, name:"Gray" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 22, name:"Tom" },
//         { size: ["L", "M"], phone: 1234567, gender: "Male", age: 20, name:"Ben" },
//         { size: ["L", "M", "XL"], phone: 1234567, gender: "Female", age: 22, name:"Ken" },
//         { size: ["L", "S"], phone: 1234567, gender: "Female", age: 23, name:"Jay" },
//         { size: ["M", "S"], phone: 1234567, gender: "Male", age: 26, name:"Chip" },
//         { size: ["XL", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Lee" },
//         { size: ["L", "M", "S", "XS"], phone: 1234567, gender: "Female", age: 30, name:"Frank" },
//         { size: ["S", "L"], phone: 1234567, gender: "Male", age: 23, name:"CoCo" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 20, name:"Fake" },
//         { size: ["XS", "L"], phone: 1234567, gender: "Male", age: 26, name:"Dump" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 27, name:"Ocean" },
//         { size: ["S", "XL"], phone: 1234567, gender: "Male", age: 20, name:"Polo" },
//         { size: ["M", "XL"], phone: 1234567, gender: "Female", age: 21, name:"Queen" },
//         { size: ["L", "M"], phone: 1234567, gender: "Female", age: 20, name:"Bump" },
//         { size: ["L", "M", "S", "XL"], phone: 1234567, gender: "Male", age: 22, name:"Judy" },
//         { size: ["XL", "M"], phone: 1234567, gender: "Female", age: 24, name:"Ryan" },
//         { size: ["L", "S"], phone: 1234567, gender: "Female", age: 25, name:"Flow" },
//         { size: ["S", "M"], phone: 1234567, gender: "Female", age: 31, name:"Ray" },
//         { size: ["L", "M", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Yen" },
//         { size: ["XL", "M", "S"], phone: 1234567, gender: "Male", age: 21, name:"Gray" },
//         { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 22, name:"Tom" }
//     ];

//     const pages = [5, 10, 25]
//     const [page, setPage] = useState(0)
//     const [rowsPerPage, setRowsPerPage] = useState(pages[page])

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
// }

// const handleChangeRowsPerPage = event => {
//     setRowsPerPage(parseInt(event.target.value, 10))
//     setPage(0);
// }

// console.log(data.length);  

// {/* <TablePagination
//             title="TablePagination"
//             subTitle="Sub Title"
//             headers={ Header }
//             data={ data }
//             columns="name.age.size.phone.gender"
//             perPageItemCount={ 5 }
//             rowsPerPageOptions={2}
//             totalCount={ data.length }
//             partialPageCount={ 10 }
//             arrayOption={ [["size", 'all', ' ']] }
//         /> */}

// const TblPagination = () => (<TablePagination
//     component="div"
//     page={page}
//     rowsPerPageOptions={pages}
//     rowsPerPage={rowsPerPage}
//     count={data.length}
//     onChangePage={handleChangePage}
//     onChangeRowsPerPage={handleChangeRowsPerPage}
// />)


//     return(
        
//         // TblPagination
//         <TablePagination
//         page={page}
//         rowsPerPageOptions={pages}
//         rowsPerPage={rowsPerPage}
//         count={data.length}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//     );
// }
