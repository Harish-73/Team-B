import React from 'react';
import { zz } from '../firebaseContent' 
import {addDocs, addDoc, collection} from "firebase/firestore";

function Sample({heroName}) {

  if(heroName === 'Joker'){
    throw new Error('Not Found!')
  } 
    return(
        <div>
          {heroName}
        </div>
    );

}

export default Sample;