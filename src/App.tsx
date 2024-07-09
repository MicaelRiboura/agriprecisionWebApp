import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './router';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './modules/user/hooks/auth-context.hook';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Router />
      </AuthProvider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App
