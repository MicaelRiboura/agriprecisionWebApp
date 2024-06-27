import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './router';

function App() {
  const test = import.meta.env.VITE_WHEATHER_API_KEY;
  console.log(`${test}`)
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App
