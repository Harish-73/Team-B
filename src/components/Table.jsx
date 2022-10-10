import {Form, Table, Card, Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
const Tab = ({ data }) => {
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
                          {data.map((user) => (
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
                          </tbody>
    </Table>
  );
};

export default Tab;