import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './router';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Toaster />
    </BrowserRouter>
  );
}

export default App
