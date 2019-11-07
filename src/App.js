import React, {useState, useEffect} from 'react';
import './App.css';
import Sitebar from './Components/Navbar/Sitebar';
import Auth from './Components/Auth/Auth';
import Sidebar from './Components/Site/Sidebar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';



const App = (props) => {

  const [sessionToken, setSessionToken] = useState('');

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

useEffect (() => {
  if(localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <Router><Sidebar token={sessionToken}/></Router>
  : <Auth updateToken={updateToken}/>)
}

  return (
    <div>
      <Sitebar clearToken={clearToken}/>
      {/* <Auth updateToken={updateToken}/> */}
      {protectedViews()}
      {/* <BarIndex style={{
        backgroundColor: "black"
      }}token={sessionToken}/>` */}
    </div>
  );
}

// return (
//   <div>
//     <Router>
//       <Sidebar />
//     </Router>
//   </div>
// );
// }

export default App;
