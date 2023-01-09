import React, {useState, useEffect} from 'react';
import { db } from '../firebaseContent';
import DataServices from "../demo/DataServices";
import { collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, } from "firebase/firestore";
import {Form, Table, Card, Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import { TablePagination, TableSortLabel } from '@mui/material';



const Tab = ({data, getDataId, getUsers, filterFn}) => {

  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "registration");
  // useEffect((event) => {
  //   getUsers();
  // }, []);

  
  // const getUsers = async () => {
  //   const data = await getDocs(usersCollectionRef);
  //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   console.log(data.id);
    
  // };

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    // const [order, setOrder] = useState()
    // const [orderBy, setOrderBy] = useState()

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      console.log(newPage);
      console.log(page);
      console.log(pages[page]);
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    console.log(rowsPerPage);

    setPage(0);
  }

  const TblPagination = () => (<TablePagination
    rowsPerPageOptions={pages}
    // component="div"
    count={data.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    />

  );

  function stableSort(array) {
    // unction stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        // const order = comparator(a[0], b[0]);
        // if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// function getComparator(order, orderBy) {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }

const recordsAfterPagingAndSorting = () => {
    return stableSort(filterFn.fn(data))
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage)

        // return stableSort(filterFn.fn(data), getComparator(order, orderBy))
        // .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
}



  const deleteHandler = async (id) => {
    // id.preventDefault();
    await DataServices.deletedata(id);
    getUsers();
    alert("Successfully Deleted");
    // const data = await getDocs(usersCollectionRef);
    // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // alert("yes");
  };

 

  return (
    <Table striped bordered hover variant="white">
      {/* <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.FirstName}</td>
            <td>{item.LastName}</td>
            <td>{item.Email}</td>
          </tr>
        ))}
      </tbody> */}
      <thead>
                            <tr>
                              <th>Student ID</th>
                              <th>Name</th>
                              <th>Email ID</th>
                              <th>Mode of Selection</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                          {recordsAfterPagingAndSorting().map((user) => (
                                <tr key={user.id}>
                                <td>{user.studentID}</td>
                                <td>{user.firstName}</td>
                                <td>{user.virtusaEmail}</td>
                                <td>{user.modeofSelection}</td>
                                <td>
                                    
                                        <Button size="sm" variant="outline-primary" onClick={(e) => getDataId(user.id)}><Link to={"/register"} className="nav-link" ><FontAwesomeIcon icon = {faEdit} />Edit</Link></Button>
                                        {"  "}
                                        <Button size="sm" variant="outline-danger" onClick={(e) => deleteHandler(user.id)}><FontAwesomeIcon icon = {faTrash} />Delete</Button>
                                    
                                </td>
                               </tr>
                               
                          ))}
                          <TblPagination />
                          
                          </tbody>
                          
                          
    </Table>
                            

  );
};

export default Tab;