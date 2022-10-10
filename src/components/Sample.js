import React from 'react';
import { db } from '../firebaseContent' 
import {addDocs, addDoc, collection} from "firebase/firestore";

function Sample() {

    const saveChange=async()=>{
          try {
            await addDoc(collection(db,"registration"), {
            RollNo:"straing"
            
            });
            alert('updated successfully');
            
          }
          catch {
            alert('Error Occurred');
          }
        // alert('updated successfully');
      
    }
    return(
        <div>
        <button onClick={() => saveChange()}>Save</button>
        </div>
    );

}

export default Sample;