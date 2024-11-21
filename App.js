import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {loginWithRedirect,logout,isAuthenticated}=useAuth0();
  return (
    <div className="App">
      <p> Welcome to Auth0 page</p>
      {!isAuthenticated?(<button onClick={()=>{loginWithRedirect()}}>Login</button>):(
        <>
        <button onClick={()=>{logout()}}>Logout</button>
        <p> Logged in successfully </p>
        </>
      )}
    </div>
  );
}

export default App;
