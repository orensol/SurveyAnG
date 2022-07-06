import './Name'
import './Welcome'
import firebase from '../Firebase/config'
import  arrowRight from '../Icons/arrowRight.png'
import  arrowLeft from '../Icons/arrowLeft.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Name() {

const [name, setName] = useState('')
const navigate = useNavigate()

const ref = firebase.firestore().collection('Name')

function editDoc(uptdDoc) {

  let updatedFields = {};
  Object.keys(uptdDoc).forEach((field) => {
      if (uptdDoc[field] && uptdDoc[field].length > 0) {
          updatedFields[field] = uptdDoc[field];
      }
  });

  ref.doc("myName")
  .update(updatedFields)
  .catch((err) => {
   console.error(err);
  })
  navigate("/FirstQuestion");
}


  return (

    <div>

      <div className='titleSmall'> Who are you?</div>
      <div className='titleMiddle'> Please enter your name.</div>
<form>
<label>

<span className='input' >

<input className='inp'
placeholder="John Doe"
autoFocus
type="text" 
value={name}
onChange={(e) => setName(e.target.value)}/>

</span>

</label>

<button
className='btn'
onClick={(e)=>{
  e.preventDefault()
  editDoc({ name})}}> Next <img className='icon' src={arrowRight}/></button>  

</form>

<div
onClick={() => navigate('/')} 
className='btn-back'><img className='icon-white' src={arrowLeft}/> back </div>


    </div>
  )
}
