import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counterActions'

function App() {
  // we can access the state variables using the useSelector
  const counter = useSelector((state) => state.counter)

  // we can dispatch action using this hook
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div className='container'>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
