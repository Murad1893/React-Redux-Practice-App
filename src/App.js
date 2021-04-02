import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBySome } from './actions/counterActions'

function App() {
  // we can access the state variables using the useSelector
  const counter = useSelector((state) => state.counter)

  // we can set state value using useState
  const [value, setValue] = useState(0);

  // we can dispatch action using this hook
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    let temp = parseInt(value)

    if (!Number.isNaN(temp)) {
      dispatch(incrementBySome(temp))
    } else {
      alert('Please enter a number!')
    }

  }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div className='container'>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br /><br /><br />
        <form onSubmit={handleSubmit}>
          <label>
            Increment by
          <input type="text" onChange={(e) => setValue(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
