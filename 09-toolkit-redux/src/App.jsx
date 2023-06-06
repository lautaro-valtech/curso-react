import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import {
  increment,
  decrement,
  incrementByAmount,
} from './store/slices/counter';

import './App.css';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
      <h1>Vite + React</h1>
      <p>count is {counter}</p>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </>
  );
}

export default App;
