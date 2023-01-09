import React, {useState, useEffect} from 'react';
import {Form, Card,Input,Modal, Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '@mui/icons-material/Search';
import "./datatable.css";
import Tab from "./Table";
// import firebase from 'firebase/compat/app';
import { db } from '../firebaseContent';
import DataServices from "../demo/DataServices";
import { collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, } from "firebase/firestore";

const Candidate = ({ getDataId }) => {

  
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "registration");
  useEffect((event) => {
    getUsers();
  }, []);

  
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(data);
  };



//   const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })


//   const handleSearch = e => {
//     let target = e.target;
//     setFilterFn({
//         fn: items => {
//             if (target.value === "")
//                 return items;
//             else
//                 return items.filter(x => x.fullName.toLowerCase().includes(target.value))
//         }
//     })
// }


// const deleteHandler = async (id) => {
//   await DataServices.deletedata(id);
//   const data = await getDocs(usersCollectionRef);
//     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   getUsers();
// };

{/*const [query, setQuery] = useState("");
  const keys = ["firstName", "studentID"];
  const search = (users) => {
    return users.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(query))
    );
  };*/}


  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const handleSearch = e => {
    let target = e.target;
    const keys = ["firstName", "studentID"];
    setFilterFn({
        fn: items => {
            if (target.value == "")
                return items;
            else
                return items.filter((item) =>
                keys.some((key) => 
                item[key]?.toLowerCase().includes(target.value))
                );
        }
    })
}


        return(
            <div>
            <div>
                <div>                      
                              <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-1"
                                    aria-label="Search"
                                    style={{alignSelf:"center", height:"40px"}}
                                    // onChange={(e) => setQuery(e.target.value)}
                                    onChange={handleSearch}
                                  
                                />
                              </Form><br />
                </div>
                <br />
            </div>
            <Card className={"border border-dark bg-white text-dark"}>
                <Card.Header><FontAwesomeIcon icon = {faList} /> Candidate List  
                {/* <Button className="ms-3" size="sm" variant="outline-secondary" onClick={getUsers}>View</Button> */}
                </Card.Header>

                <Card.Body>
                  <Tab data={users} getDataId={getDataId} getUsers={getUsers} filterFn={filterFn} />
                  {/* <TblPagination /> */}
                {/* <Table striped bordered hover variant="white" users={search(users)}> */}
                      {/* <thead>
                            <tr>
                              <th>Student ID</th>
                              <th>Name</th>
                              <th>Email ID</th>
                              <th>Mode of Selection</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                          {users.map((user) => (
                                <tr>
                                <td>{user.StudentID}</td>
                                <td>{user.FirstName}</td>
                                <td>{user.PersonalEmail}</td>
                                <td>{user.ModeofSelection}</td>
                                <td>
                                    
                                        <Button size="sm" variant="outline-primary"><Link to={"/register/"} className="nav-link" ><FontAwesomeIcon icon = {faEdit} /></Link></Button>
                                        {"  "}
                                        <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon = {faTrash} /></Button>
                                    
                                </td>
                               </tr>
                               
                          ))}
                          </tbody> */}
                          
                {/* </Table> */}
                </Card.Body>
            </Card>
            </div>

        );
};
export default Candidate;
