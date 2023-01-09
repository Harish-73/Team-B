import { RadioGroup, FormControlLabel, Radio, checked } from '@mui/material';
import React from 'react';
import {useState} from 'react';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import { db } from '../firebaseContent'
import {addDocs, addDoc, collection} from "firebase/firestore";
import {Link} from 'react-router-dom';

export default class Registration extends React.Component{

    constructor(props, id, setDataId){
        super(props);
        this.state = this.initialState;
        // this.state = this.checkFalse;
        // this.state.show=false;
        this.detailsChange = this.detailsChange.bind(this);
        this.submitDetails = this.submitDetails.bind(this);

    }


    
    
    initialState = {
              StudentID:""
            , FirstName:""
            , MiddleName:""
            , LastName:""
            , DOB:""
            , ContactPhone:""
            , TwitterHandle:""
            , FacebookHandle:""
            , PersonalEmail:""
            , VirtusaEmail:""
            , DateofSelection:""
            , ModeofSelection:""
            , Address1:""
            , Address2:""
            , Address3:""
            , State:""
            , City:""
            , PinCode:""
            , CollegeID:""
            , CollegeName:""
            , IsAutonomous:undefined
            , IsUniversityStatus:undefined
            , Departmant:""
            , CurrentSemester:""
            , CurrentYear:""
            , checkTrue:false
            , checkFalse:false
            , Agree:false
            
    }

    resetDetails = () => {
      this.setState(() => this.initialState);
    }

    

    submitDetails = event => {
        event.preventDefault();
            // alert(this.state.DOB +" - "+this.state.IsAutonomous+" - "+ this.state.IsUniversityStatus+" - "+this.state.Departmant);
            // console.log(details)
            this.saveChange();
            
            
    }

    detailsChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    checkChange = (event) =>{
      this.setState({[event.checked]:false});
    }
    
    saveChange = async() => { 
      
      const details = {
        StudentID: this.state.StudentID
        , FirstName: this.state.FirstName
        , MiddleName: this.state.MiddleName
        , LastName: this.state.LastName
        , DOB: this.state.DOB
        , ContactPhone: this.state.ContactPhone
        , TwitterHandle: this.state.TwitterHandle
        , FacebookHandle: this.state.FacebookHandle
        , PersonalEmail: this.state.PersonalEmail
        , VirtusaEmail: this.state.VirtusaEmail
        , DateofSelection: this.state.DateofSelection
        , ModeofSelection: this.state.ModeofSelection
        , Address1: this.state.Address1
        , Address2: this.state.Address2
        , Address3: this.state.Address3
        , State: this.state.State
        , City: this.state.City
        , PinCode: this.state.PinCode
        , CollegeID: this.state.CollegeID
        , CollegeName: this.state.CollegeName
        , IsAutonomous: this.state.IsAutonomous
        , IsUniversityStatus: this.state.IsUniversityStatus
        , Departmant: this.state.Departmant
        , CurrentSemester: this.state.CurrentSemester
        , CurrentYear: this.state.CurrentYear
      };
      
      try {
        await addDoc(collection(db,"registration"), {
              StudentID:details.StudentID
            , FirstName:details.FirstName
            , MiddleName:details.MiddleName
            , LastName:details.LastName
            , DOB:details.DOB
            , ContactPhone:details.ContactPhone
            , TwitterHandle:details.TwitterHandle
            , FacebookHandle:details.FacebookHandle
            , PersonalEmail:details.PersonalEmail
            , VirtusaEmail:details.VirtusaEmail
            , DateofSelection:details.DateofSelection
            , ModeofSelection:details.ModeofSelection
            , Address1:details.Address1
            , Address2:details.Address2
            , Address3:details.Address3
            , State:details.State
            , City:details.City
            , PinCode:details.PinCode
            , CollegeID:details.CollegeID
            , CollegeName:details.CollegeName
            , IsAutonomous:details.IsAutonomous
            , IsUniversityStatus:details.IsUniversityStatus
            , Departmant:details.Departmant
            , CurrentSemester:details.CurrentSemester
            , CurrentYear:details.CurrentYear
        });
        alert('Registered successfully');
        this.setState(this.initialState);
      } catch {
      alert('Error Occurred');
    }
  };



  

    

    render(){
      
      const image='https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fjovanas%2Fjovanas1602%2Fjovanas160201759%2F52212634-book-logo-sign-black.jpg'
      const {StudentID
        , FirstName
        , MiddleName
        , LastName
        , DOB
        , ContactPhone
        , TwitterHandle
        , FacebookHandle
        , PersonalEmail
        , VirtusaEmail
        , DateofSelection
        , ModeofSelection
        , Address1
        , Address2
        , Address3
        , State
        , City
        , PinCode
        , CollegeID
        , CollegeName
        , IsAutonomous
        , IsUniversityStatus
        , Departmant
        , CurrentSemester
        , CurrentYear
        } = this.state;

        return(

            <div>
                
                <Form onReset={this.resetDetails} onSubmit={this.submitDetails} id="detailsFromId">

                <Card className={"border border-dark bg-light text-dark"}>
                    <Card.Header>< AccountBoxIcon /> Student Details</Card.Header>
                <Card.Body>

                    <Row>
                         <Form.Group as={Col} controlId="fromGridStudentID">
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control type="text" name="StudentID" value={StudentID} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Student ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridFirstName" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="FirstName" value={FirstName} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter First Name" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridMiddleName">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text" name="MiddleName" value={MiddleName} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Middle Name" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridLastName" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="LastName" value={LastName} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Last Name" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridDOB">
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type="date" name="DOB" value={DOB} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter DOB" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridVirtusaEmail">
                            <Form.Label>Virtusa Email ID</Form.Label>
                            <Form.Control type="text" name="VirtusaEmail" value={VirtusaEmail} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Virtusa Email ID" />
                          </Form.Group>                          

                    </Row><br />

                    <Row>
                          <Form.Group as={Col} controlId="fromGridDateofSelection" >
                            <Form.Label>Date of Selection</Form.Label>
                            <Form.Control type="date" name="DateofSelection" value={DateofSelection} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Date of Selection" />
                          </Form.Group>
                         
                          <Form.Group as={Col} controlId="fromGridModeofSelection" >
                            <Form.Label>Mode of Selection</Form.Label>
                            <RadioGroup row={true} name="ModeofSelection">
                            <FormControlLabel name="ModeofSelection" value="Standard Recruit" control={<Radio required/>} label="Standard Recruit" required onChange={(e) => this.setState({[e.target.name]:e.target.value})} checked={ModeofSelection==="Standard Recruit" ? true : false}/>
                            <FormControlLabel name="ModeofSelection" value="VSAP" control={<Radio required/>} label="VSAP" required onChange={(e) => this.setState({[e.target.name]:e.target.value})} checked={ModeofSelection==="VSAP" ? true : false}/>
                            <FormControlLabel name="ModeofSelection" value="Jatayu" control={<Radio required/>} label="Jatayu" required onChange={(e) => this.setState({[e.target.name]:e.target.value})} checked={ModeofSelection==="Jatayu" ? true : false}/>
                            <FormControlLabel name="ModeofSelection" value="Off Campus" control={<Radio required/>} label="Off Campus" required onChange={(e) => this.setState({[e.target.name]:e.target.value})} checked={ModeofSelection==="Off Campus" ? true : false}/>
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
                            <Form.Control type="text" name="CollegeID" value={CollegeID} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter College ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridCollegeName" >
                            <Form.Label>College Name</Form.Label>
                            <Form.Control type="text" name="CollegeName" value={CollegeName} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter College Name" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridDepartmant">
                            <Form.Label>Departmant</Form.Label>
                            <Form.Control type="text" name="Departmant" value={Departmant} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Departmant" />
                          </Form.Group>

                        <Form.Group as={Col} controlId="formGridCurrentYear">
                        <Form.Label>Current Year</Form.Label>
                        <Form.Control type="text" name="CurrentYear" value={CurrentYear} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Current Year" />
                        </Form.Group>
                                                 

                    </Row><br />

                    <Row >

                    <Form.Group as={Col} controlId="formGridCurrentSemester" >
                        <Form.Label>Current Semester</Form.Label>
                        <Form.Control type="text" name="CurrentSemester" value={CurrentSemester} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Current Semester" />
                    </Form.Group>
                 
                    <Form.Group as={Col} controlId="formGridisAutonomous" >
                        <Form.Label>Is Autonomous</Form.Label><br />
                        {/* <label>Yes<input name="IsAutonomous" type="radio" value="Yes" onChange={this.detailsChange} label="Yes" required checked={IsAutonomous==="Yes" ? true : false}
                        /></label>{" "}

                        <label>No<input name="IsAutonomous" type="radio" value="No" onChange={this.detailsChange} label="No" required checked={IsAutonomous==="No" ? true : false}
                        /></label> */}
                        <RadioGroup row={true} >
                            <FormControlLabel name="IsAutonomous" value="Yes" control={<Radio required/>} label="Yes" onChange={this.detailsChange} required checked={IsAutonomous==="Yes" ? true : false}/>
                            <FormControlLabel name="IsAutonomous" value="No" control={<Radio required/>} label="No" onChange={this.detailsChange} required checked={IsAutonomous==="No" ? true : false}/>
                          </RadioGroup>
                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridIsUniversityStatus">
                        <Form.Label>Is University Status</Form.Label>
                          <RadioGroup row={true} name="IsUniversityStatus" required>
                            <FormControlLabel name="IsUniversityStatus" value="Yes" control={<Radio required/>} label="Yes" required onChange={(e) => this.setState({[e.target.name]:e.target.value})} checked={IsUniversityStatus==="Yes" ? true : false}/>
                            <FormControlLabel name="IsUniversityStatus" value="No" control={<Radio required/>} label="No" required onChange={(e) => this.setState({[e.target.name]:e.target.value})} checked={IsUniversityStatus==="No" ? true : false}/>
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
                            <Form.Control type="text" name="PersonalEmail" value={PersonalEmail} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Personal Email ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridContactPhone" >
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" name="ContactPhone" value={ContactPhone} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Contact Number" />
                          </Form.Group>

                    </Row><br />

                    <Row>
                         <Form.Group as={Col} controlId="fromGridTwitterHandle">
                            <Form.Label>Twitter Handle</Form.Label>
                            <Form.Control type="text" name="TwitterHandle" value={TwitterHandle} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Twitter Handle ID" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="fromGridFacebookHandle" >
                            <Form.Label>Facebook Handle</Form.Label>
                            <Form.Control type="text" name="FacebookHandle" value={FacebookHandle} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Facebook Handle ID" />
                          </Form.Group>

                    </Row><br />

                    <Row>

                        <Form.Group as={Col} controlId="fromGridAddress1" >
                            <Form.Label>Address1</Form.Label>
                            <Form.Control type="text" name="Address1" value={Address1} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Address1" />
                          </Form.Group>

                         <Form.Group as={Col} controlId="fromGridAddress2">
                            <Form.Label>Address2</Form.Label>
                            <Form.Control type="text" name="Address2" value={Address2} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Address2" />
                          </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress3">
                        <Form.Label>Address3</Form.Label>
                        <Form.Control type="text" name="Address3" value={Address3} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Address3" />
                        </Form.Group>
                                                 

                    </Row>  <br />  

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="City" value={City} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter City" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name="State" value={State} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter State" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPinCode">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="text" name="PinCode" value={PinCode} onChange={this.detailsChange} required autoComplete = "off" className={"bg-white text-dark"} placeholder="Enter Pin Code" />
                        </Form.Group>
                    </Row>

                    </Card.Body>
                    

                    <Card.Footer style={{"textAlign":"right"}}>
                        <br/>
                    </Card.Footer>
                    
                    </Card>
                    <br />
                    
                    <label> <input style={{width:"15px", height:"15px"}} name="Agree" type="checkbox" onClick={(e) => this.setState({[e.target.name]:!this.state.Agree})} required checked={this.state.Agree ? true : false}
                    />{" "} I Agree</label>    
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="lg" variant="outline-success" type="submit">
                        Submit
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

}
