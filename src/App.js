import './Pages/Name'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Name from './Pages/Name';
import Welcome from './Pages/Welcome';
import FirstQuestion from './Pages/FirstQuestion';
import SecondQuestion from './Pages/SecondQuestion';
import ThirdQuestion from './Pages/ThirdQuestion';
import Score from './Pages/Score';


function App() {

  return (
  <div className="App">


 <BrowserRouter>
 <Routes>
      <Route path="/Name" element={<Name />} />
      <Route exact path="/" element={<Welcome />}/>
      <Route exact path="/FirstQuestion" element={<FirstQuestion />}/>
      <Route exact path="/SecondQuestion" element={<SecondQuestion />}/>
      <Route exact path="/ThirdQuestion" element={<ThirdQuestion />}/>
      <Route exact path="/Score" element={<Score />}/>
     


    </Routes>

    </BrowserRouter>

 
    </div>
    
  );
}

export default App;
