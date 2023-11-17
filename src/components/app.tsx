import { useState } from 'react';

import '../styles/styles.scss';

import ErrorBoundary from './error-boundary';
import Test from './test';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <ErrorBoundary>
    <div>
      This is just a test
      rendered React application.
      <br />
      <br />
      Here is a button that will track
      how many times you click it:
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Test test={true}/>
    </div>
    </ErrorBoundary>
  );
}