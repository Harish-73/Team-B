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
import { collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, } from "firebase/firestore";

export default function Candidate() {

  // const [allDocs, setAllDocs] = useState([]);
  // const db = firebase.firestore;

  // function fetchAll(e){
  //   e.preventDefault();

  //     db.collection("registration").get().then((snapshot) => { 
  //       if(snapshot.docs.length>0){
  //           snapshot.docs.forEach((doc) => {
  //           setAllDocs((prev) => { 
  //             return [...prev, doc.data()];
  //     });
  //     });
  //   }
  //     });
  //     console.log(allDocs);

  //   }

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "registration");

  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "registration", id);
  //   await deleteDoc(userDoc);
  // };

  useEffect((event) => {
    // event.preventDefault();
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.id);
    };

    getUsers();
  }, []);

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
  

const [query, setQuery] = useState("");
  const keys = ["FirstName", "StudentID"];
  const search = (users) => {
    return users.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };


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
                                    // onChange={handleSearch}
                                    onChange={(e) => setQuery(e.target.value)}
                                  
                                />
                              </Form><br />
                </div>
                <br />
            </div>
            <Card className={"border border-dark bg-white text-dark"}>
                <Card.Header><FontAwesomeIcon icon = {faList} /> Candidate List</Card.Header>
                <Card.Body>
                  <Tab data={search(users)}/>
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
}
