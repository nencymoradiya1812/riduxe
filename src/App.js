import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './Action';
import { remove } from './Action';

function App() {
  let count=useSelector((count)=>count)
  let dispatch=useDispatch()
  return (
    <div className="App">
        <>
          <h1>
            count:{count}
          </h1>
          <button onClick={()=>dispatch(add())}>
               Add
          </button>
          <button onClick={()=>dispatch(remove())}>
               remove
          </button>
        </>
    </div>
  );
}

export default App;
