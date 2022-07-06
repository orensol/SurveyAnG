import './Name'
import './Welcome'
import  arrowRight from '../Icons/arrowRight.png'
import  arrowLeft from '../Icons/arrowLeft.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import firebase from '../Firebase/config'

export default function FirstQuestion() {

    const navigate = useNavigate()
    const [country, setCountry] = useState('')
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
  navigate("/Score");
}

        

  return (

    <div>

      <div className='titleSmall'> question 3</div>
      <div className='titleMiddle'> Where are you from?</div>
<form>
<label>

<span className='dropDown'>

<select className='dropDownText' value={country} onChange={(e) => setCountry(e.target.value)}>
  <option defaultValue={3}>Germany</option>
  <option value={5}>Sweden</option>
  <option value={5}>Italy</option>
  <option value={3}>Spain</option>
</select>
</span>

</label>

<button className='btn'
onClick={(e)=>{
  e.preventDefault()
  editDoc({ country })}} >Finish <img className='icon' src={arrowRight}/></button>  
</form>

<div
onClick={() => navigate('/SecondQuestion')} 
className='btn-back'> <img className='icon-white' src={arrowLeft}/> back </div>

    </div>
  )
}
