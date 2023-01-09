import { RadioGroup, FormControlLabel, Radio, checked } from '@mui/material';
import React, {useState, useEffect} from 'react';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import { db } from '../firebaseContent'
import {addDocs, addDoc, collection} from "firebase/firestore";
import {Link} from 'react-router-dom';
import DataServices from "../demo/DataServices";
import { useNavigate } from 'react-router-dom';

export default function Update({ id, setDataId }) {

    const [studentID, setStudentID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dOB, setDOB] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [twitterHandle, setTwitterHandle] = useState("");
    const [facebookHandle, setFacebookHandle] = useState("");
    const [personalEmail, setPersonalEmail] = useState("");
    const [virtusaEmail, setVirtusaEmail] = useState("");
    const [dateofSelection, setDateofSelection] = useState("");
    const [modeofSelection, setModeofSelection] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [collegeID, setCollegeID] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [isAutonomous, setIsAutonomous] = useState("");
    const [isUniversityStatus, setIsUniversityStatus] = useState("");
    const [departmant, setDepartmant ] = useState("");
    const [currentSemester, setCurrentSemester] = useState("");
    const [currentYear, setCurrentYear] = useState("");
    const [agree, setAgree] = useState(false);
    const [flag, setFlag] = useState(true);

    const navigate = useNavigate();
    
    
    const initialState =() => {
        setStudentID("");
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setDOB("");
        setContactPhone("");
        setTwitterHandle("");
        setFacebookHandle("");
        setPersonalEmail("");
        setVirtusaEmail("");
        setDateofSelection("");
        setModeofSelection("");
        setAddress1("");
        setAddress2("");
        setAddress3("");
        setState("");
        setCity("");
        setPinCode("");
        setCollegeID("");
        setCollegeName("");
        setIsAutonomous("");
        setIsUniversityStatus("");
        setDepartmant("");
        setCurrentSemester("");
        setCurrentYear("");
        setAgree(false);        
    }

    const editState =(docSnap) => {
        setStudentID(docSnap.data().studentID);
        setFirstName(docSnap.data().firstName);
        setMiddleName(docSnap.data().middleName);
        setLastName(docSnap.data().lastName);
        setDOB(docSnap.data().dOB);
        setContactPhone(docSnap.data().contactPhone);
        setTwitterHandle(docSnap.data().twitterHandle);
        setFacebookHandle(docSnap.data().facebookHandle);
        setPersonalEmail(docSnap.data().personalEmail);
        setVirtusaEmail(docSnap.data().virtusaEmail);
        setDateofSelection(docSnap.data().dateofSelection);
        setModeofSelection(docSnap.data().modeofSelection);
        setAddress1(docSnap.data().address1);
        setAddress2(docSnap.data().address2);
        setAddress3(docSnap.data().address3);
        setState(docSnap.data().state);
        setCity(docSnap.data().city);
        setPinCode(docSnap.data().pinCode);
        setCollegeID(docSnap.data().collegeID);
        setCollegeName(docSnap.data().collegeName);
        setIsAutonomous(docSnap.data().isAutonomous);
        setIsUniversityStatus(docSnap.data().isUniversityStatus);
        setDepartmant(docSnap.data().departmant);
        setCurrentSemester(docSnap.data().currentSemester);
        setCurrentYear(docSnap.data().currentYear);        
    }

    const resetDetails = () => {
      initialState();
    }

    

    const submitDetails = (event) => {
        event.preventDefault();
        saveChange();
            
    }
    
    const saveChange = async() => { 
      const details = {
          studentID
        , firstName
        , middleName
        , lastName
        , dOB
        , contactPhone
        , twitterHandle
        , facebookHandle
        , personalEmail
        , virtusaEmail
        , dateofSelection
        , modeofSelection
        , address1
        , address2
        , address3
        , state
        , city
        , pinCode
        , collegeID
        , collegeName
        , isAutonomous
        , isUniversityStatus
        , departmant
        , currentSemester
        , currentYear
      };
      
  try {
    if (id !== undefined && id !== "") {
      await DataServices.updateData(id, details);
      alert('Updated successfully');
      setDataId("");
      navigate("/list", { replace: true });
    } else {
        await DataServices.adddata(details);
        alert('Registered successfully');
    }
  } catch (err) {
    alert('Error Occurred');
  }
  initialState();
};

  const editHandler = async () => {
    try {
      const docSnap = await DataServices.getdata(id);
      console.log("the record is :", docSnap.data());
      editState(docSnap);
    } catch (err) {
      alert("EditHandler error");
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
      setFlag(false);
    }
  }, [id]);

    return(

            <div>
                
                <Form onReset={resetDetails} onSubmit={submitDetails} id="detailsFromId">

                <Card className={"border border-dark bg-light text-dark"}>
                    <Card.Header>< AccountBoxIcon /> Student Details</Card.Header>
                <Card.Body>

                    <Row>
                         <Form.Group as={Col} controlId="fromGridStudentID">
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control type="text" name="StudentID" value={studentID} onChange={(e) => setStudentID(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Student ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridFirstName" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter First Name" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridMiddleName">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text" name="MiddleName" value={middleName} onChange={(e) => setMiddleName(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Middle Name" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridLastName" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Last Name" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridDOB">
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type="date" name="DOB" value={dOB} onChange={(e) => setDOB(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter DOB" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridVirtusaEmail">
                            <Form.Label>Virtusa Email ID</Form.Label>
                            <Form.Control type="text" name="VirtusaEmail" value={virtusaEmail} onChange={(e) => setVirtusaEmail(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Virtusa Email ID" />
                          </Form.Group>                          

                    </Row><br />

                    <Row>
                          <Form.Group as={Col} controlId="fromGridDateofSelection" >
                            <Form.Label>Date of Selection</Form.Label>
                            <Form.Control type="date" name="DateofSelection" value={dateofSelection} onChange={(e) => setDateofSelection(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Date of Selection" />
                          </Form.Group>
                         
                          <Form.Group as={Col} controlId="fromGridModeofSelection" >
                            <Form.Label>Mode of Selection</Form.Label>
                            <RadioGroup row={true} name="ModeofSelection">
                            <FormControlLabel name="ModeofSelection" value="Standard Recruit" control={<Radio required/>} label="Standard Recruit" required onChange={(e) => setModeofSelection(e.target.value)} checked={modeofSelection==="Standard Recruit" ? true : false}/>
                            <FormControlLabel name="ModeofSelection" value="VSAP" control={<Radio required/>} label="VSAP" required onChange={(e) => setModeofSelection(e.target.value)} checked={modeofSelection==="VSAP" ? true : false}/>
                            <FormControlLabel name="ModeofSelection" value="Jatayu" control={<Radio required/>} label="Jatayu" required onChange={(e) => setModeofSelection(e.target.value)} checked={modeofSelection==="Jatayu" ? true : false}/>
                            <FormControlLabel name="ModeofSelection" value="Off Campus" control={<Radio required/>} label="Off Campus" required onChange={(e) => setModeofSelection(e.target.value)} checked={modeofSelection==="Off Campus" ? true : false}/>
                            </RadioGroup>
                          </Form.Group>
                                            

                    </Row><br />

                    </Card.Body>

                    <Card.Footer style={{"textAlign":"right"}}>
                    <br />
                    </Card.Footer>
                    </Card>
                    <br />    
                <br />
                <Card className={"border border-dark bg-light text-dark"}>
                    <Card.Header>< SchoolIcon /> College Details</Card.Header>
                <Card.Body>

                    <Row>
                         <Form.Group as={Col} controlId="fromGridCollegeID">
                            <Form.Label>College ID</Form.Label>
                            <Form.Control type="text" name="CollegeID" value={collegeID} onChange={(e) => setCollegeID(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter College ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridCollegeName" >
                            <Form.Label>College Name</Form.Label>
                            <Form.Control type="text" name="CollegeName" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter College Name" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridDepartmant">
                            <Form.Label>Departmant</Form.Label>
                            <Form.Control type="text" name="Departmant" value={departmant} onChange={(e) => setDepartmant(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Departmant" />
                          </Form.Group>

                        <Form.Group as={Col} controlId="formGridCurrentYear">
                        <Form.Label>Current Year</Form.Label>
                        <Form.Control type="text" name="CurrentYear" value={currentYear} onChange={(e) => setCurrentYear(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Current Year" />
                        </Form.Group>
                                                 

                    </Row><br />

                    <Row >

                    <Form.Group as={Col} controlId="formGridCurrentSemester" >
                        <Form.Label>Current Semester</Form.Label>
                        <Form.Control type="text" name="CurrentSemester" value={currentSemester} onChange={(e) => setCurrentSemester(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Current Semester" />
                    </Form.Group>
                 
                    <Form.Group as={Col} controlId="formGridisAutonomous" >
                        <Form.Label>Is Autonomous</Form.Label><br />
                        {/* <label>Yes<input name="IsAutonomous" type="radio" value="Yes" onChange={this.detailsChange} label="Yes" required checked={IsAutonomous==="Yes" ? true : false}
                        /></label>{" "}

                        <label>No<input name="IsAutonomous" type="radio" value="No" onChange={this.detailsChange} label="No" required checked={IsAutonomous==="No" ? true : false}
                        /></label> */}
                        <RadioGroup row={true} >
                            <FormControlLabel name="IsAutonomous" value="Yes" control={<Radio required/>} label="Yes" onChange={(e) => setIsAutonomous(e.target.value)} required checked={isAutonomous==="Yes" ? true : false}/>
                            <FormControlLabel name="IsAutonomous" value="No" control={<Radio required/>} label="No" onChange={(e) => setIsAutonomous(e.target.value)} required checked={isAutonomous==="No" ? true : false}/>
                          </RadioGroup>
                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridIsUniversityStatus">
                        <Form.Label>Is University Status</Form.Label>
                          <RadioGroup row={true} name="IsUniversityStatus" required>
                            <FormControlLabel name="IsUniversityStatus" value="Yes" control={<Radio required/>} label="Yes" required onChange={(e) => setIsUniversityStatus(e.target.value)} checked={isUniversityStatus==="Yes" ? true : false}/>
                            <FormControlLabel name="IsUniversityStatus" value="No" control={<Radio required/>} label="No" required onChange={(e) => setIsUniversityStatus(e.target.value)} checked={isUniversityStatus==="No" ? true : false}/>
                          </RadioGroup>
                        </Form.Group>

                    </Row>

                    </Card.Body>

                    <Card.Footer style={{"textAlign":"right"}}>
                    <br />
                    </Card.Footer>
                    </Card>
                    <br />
                    <br/>

                    <Card className={"border border-dark bg-light text-dark"}>
                    <Card.Header><SettingsAccessibilityIcon /> Personal Details</Card.Header>
                <Card.Body>

                    <Row>
                         <Form.Group as={Col} controlId="fromGridPersonalEmail">
                            <Form.Label>Personal Email ID</Form.Label>
                            <Form.Control type="text" name="PersonalEmail" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Personal Email ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridContactPhone" >
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" name="ContactPhone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Contact Number" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridTwitterHandle">
                            <Form.Label>Twitter Handle</Form.Label>
                            <Form.Control type="text" name="TwitterHandle" value={twitterHandle} onChange={(e) => setTwitterHandle(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Twitter Handle ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridFacebookHandle" >
                            <Form.Label>Facebook Handle</Form.Label>
                            <Form.Control type="text" name="FacebookHandle" value={facebookHandle} onChange={(e) => setFacebookHandle(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Facebook Handle ID" />
                          </Form.Group>

                    </Row><br />

                    <Row>

                        <Form.Group as={Col} controlId="fromGridAddress1" >
                            <Form.Label>Address1</Form.Label>
                            <Form.Control type="text" name="Address1" value={address1} onChange={(e) => setAddress1(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Address1" />
                          </Form.Group>

                         <Form.Group as={Col} controlId="fromGridAddress2">
                            <Form.Label>Address2</Form.Label>
                            <Form.Control type="text" name="Address2" value={address2} onChange={(e) => setAddress2(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Address2" />
                          </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress3">
                        <Form.Label>Address3</Form.Label>
                        <Form.Control type="text" name="Address3" value={address3} onChange={(e) => setAddress3(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Address3" />
                        </Form.Group>
                                                 

                    </Row>  <br />  

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter City" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name="State" value={state} onChange={(e) => setState(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter State" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPinCode">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="text" name="PinCode" value={pinCode} onChange={(e) => setPinCode(e.target.value)} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Pin Code" />
                        </Form.Group>
                    </Row>

                    </Card.Body>
                    

                    <Card.Footer style={{"textAlign":"right"}}>
                        <br/>
                    </Card.Footer>
                    
                    </Card>
                    <br />
                    
                    <label> <input style={{width:"15px", height:"15px"}} name="Agree" type="checkbox" onClick={(e) => setAgree(!agree)} required checked={agree ? true : false}
                    />{" "} I Agree</label>    
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button disabled={!flag} size="lg" variant="outline-success" type="submit">
                        Submit
                        </Button>{" "}
                        <Button disabled={flag} size="lg" variant="outline-success" type="submit">
                        Save
                        </Button>{" "}
                        <Button size="lg" variant="outline-primary" type="reset">
                        Reset
                        </Button>
                    <br />
                    </Card.Footer>
                    </Form>    
                     
                    <br /><br />
            </div>
        
        );
        

}
