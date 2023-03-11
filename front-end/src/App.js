
import './App.css';
import { AuthProvider } from './Context/AuthContext';
import Home from './Components/Home/Home';

import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "306582956601-3l9ndt9cggvv5f7q5f8u74322gmnkcso.apps.googleusercontent.com"


function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
