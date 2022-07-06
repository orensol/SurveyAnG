import './Name'
import  arrowRight from '../Icons/arrowRight.png'
import { useNavigate } from 'react-router-dom';


function Welcome() {
    
    const navigate = useNavigate()

  return (

  <div>
 <h2 className='welcomeTitle' >Welcome to our Survey.</h2>
 <div>
 <p className='welcomeText'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Accusamus cum nesciunt quam illum quod consequuntur quidem. Voluptatum, dolor iste,
 facilis cum consequatur quam velit dolores impedit quibusdam doloribus corrupti nulla?
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum nesciunt quam illum
 quod consequuntur quidem. Voluptatum, dolor iste, facilis cum consequatur quam velit dolores
 impedit quibusdam doloribus corrupti nulla? </p>
 <button
 onClick={() => navigate('Name')}
 className='btn-welcome'>Start the survey <img className='icon' src={arrowRight}/></button>   
 </div> 
    </div>
    
  );
}

export default Welcome;