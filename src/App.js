import './App.css';
import Home from './Component/Home'
import Login from './Component/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './Component/Signup';
import Tempdata from './Component/Tempdata'
import {useSelector, useDispatch} from 'react-redux'
import Tempcart from './/Component/Tempcart'
  import LooginHome from './Component/LooginHome';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/Cart' element={<Tempcart/>}></Route>

    </Routes>
   
    </BrowserRouter>
  );
}

export default App;


/*
function App() {
  const selectorCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  const IncrementCounter = () =>{
    dispatch( {type: 'increment'} )

  }
  
  const Add = ()=> {
    dispatch({type: 'Add', payload: 20})
  }

  const DecrementCounter = () =>{
    dispatch( {type: 'decrement'} )

  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{selectorCounter}</h2>
      <button onClick={IncrementCounter}>Increment</button>
      <button onClick={DecrementCounter}>Decrement</button>
      <button onClick={Add}>Add </button>
    </div>
  );
}

export default App;
*/

/*
function App(){
  const Data = useSelector((state)=>state.Data)

return (
  <BrowserRouter>
  <Routes>
    {console.log(Data)}
  <Route path="/" element={<Tempdata/>}></Route>
  <Route path="/Cart" element={<Tempcart/>}></Route>
  </Routes>
  </BrowserRouter>
  )

}

export default App;

*/


