import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./components/main"
import Login from './components/login';
import Register from './components/register'
import Lms from './components/LMS';
import TableLms from './components/tableLMS';
import AddLms from './components/add';
import UpdateLms from './components/update';
import Scores from './components/scores';
import updateScores from './components/updateScores';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Lms' element={<Lms/>}/>
      <Route path='/TableLms'element={<TableLms/>}/>
      <Route path='/AddLms'element={<AddLms/>}/>
      <Route path='/UpdateLms/:MaHS' element={<UpdateLms/>}/>
      <Route path='/Scores'element={<Scores/>}/>
      <Route path='/updateScores/:id' element={<updateScores/>}/>
    </Routes>
  );
}


export default App;
