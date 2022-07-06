import './Name'
import './Welcome'
import  arrowRight from '../Icons/arrowRight.png'
import  arrowLeft from '../Icons/arrowLeft.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import firebase from '../Firebase/config'

export default function FirstQuestion() {

    const navigate = useNavigate()
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')

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
  navigate("/ThirdQuestion");
}


  return (

    <div>

      <div className='titleSmall'> question 2</div>
      <div className='titleMiddle'> Choose at least one option </div>
<form >


<span className='radio'>

<div>
<input
type="checkbox"
name='option1'
defaultValue={2}
id="option1"
onChange={(e) => setOption1(e.target.value)}
/>
<label htmlFor="option1"> Option1 </label>
</div>


<div>
<input
type="checkbox"
name='option2'
id="option2"
value={2}
onChange={(e) => setOption2(e.target.value)}
/>
<label htmlFor="option2">  Option2 </label>
</div>

<div>
<input
type="checkbox"
name='option3'
id="option3"
value={2}
onChange={(e) => setOption3(e.target.value)}
/>
<label htmlFor="option3">  Option3 </label>
</div>
</span>



<button className='btn' onClick={(e)=>{
  e.preventDefault()
  editDoc({ option1, option2, option3 })}} >Next <img className='icon' src={arrowRight}/></button>  

</form>

<div onClick={() => navigate('/FirstQuestion')}  className='btn-back'> <img className='icon-white' src={arrowLeft}/> back </div>


    </div>
  )
}