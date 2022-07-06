import './Name'
import './Welcome'
import  arrowRight from '../Icons/arrowRight.png'
import  arrowLeft from '../Icons/arrowLeft.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import firebase from '../Firebase/config'

export default function FirstQuestion() {

    const navigate = useNavigate()
    const [visit, setVisit] = useState('')
 
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
  navigate("/SecondQuestion");
}

  return (

    <div>

      <div className='titleSmall'> question 1</div>
      <div className='titleMiddle'> How often do you visit this website? </div>
<form >


<span className='radio'>
<div> 
<input
type="radio"
id='often'
name='visit'
defaulValue={5}
onChange={(e) => setVisit(e.target.value)}
/>
<label htmlFor="often"> Often </label>
</div>

<div> 
<input
type="radio"
id='rarely'
name='visit'
value={3}
onChange={(e) => setVisit(e.target.value)}
/>
<label htmlFor="rarely"> Rarely</label>
</div>

<div>
<input
type="radio"
id='never'
name='visit'
value={0}
onChange={(e) => setVisit(e.target.value)}
/>
<label htmlFor="never"> Never </label>
</div>
</span>


<button
className='btn'
onClick={(e)=>{
  e.preventDefault()
  editDoc({ visit })}} >Next <img className='icon' src={arrowRight}/></button>  

</form>

<div
onClick={() => navigate('/Name')}
className='btn-back'> <img className='icon-white' src={arrowLeft}/> back </div>


    </div>
  )
}
