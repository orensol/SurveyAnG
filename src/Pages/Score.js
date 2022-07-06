import './Name'
import './Welcome'
import { useNavigate } from 'react-router-dom';
import firebase from '../Firebase/config'
import { useState } from 'react';
import {useEffect} from 'react';


export default function Score() {

    const navigate = useNavigate()

    function getData(){
        ref.onSnapshot((querySnapshot) => {
          const items = []
          querySnapshot.forEach((doc) => {
          items.push(doc.data())
       })
       setData(items)
       setLoader(false)
      })
      }
      
      
      useEffect(() => {
        getData()
      })
      
    
    const ref = firebase.firestore().collection('Name')
    
    const [data, setData] = useState([])
    const [isPending] = useState(false)
    const [error] = useState(false)
    const [loader, setLoader] = useState(true)
    
const resetDoc = () => {
    
ref.doc("myName").update({
visit: '0' , country: '0', option1:'0', option2: '0', option3: '0', name: ''
    })

    navigate('/Name');
  }
   

    
      return (
        
<div>
<div className='titleSmall'> RESULT</div>       
    
    {error && <p className='error'> {error} </p>}
            {isPending && <p className='loading'> Loading... </p>}
            {loader === false && data.map((dev) => (
              <div key={dev.id}>
        <div className='titleMiddle'> Your score</div> 
        <div className='titleName'>{dev.name} </div> 
        <div  className='scoreSum'>
            {parseInt(dev.visit) + parseInt(dev.country) + parseInt(dev.option1) + parseInt(dev.option2) + parseInt(dev.option3)}/16</div>
        
    </div>

    ))}
    
    <div onClick={resetDoc}  className='btn-score'> Start new</div>      
        </div>

        
)};
    
      
      


  

