import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';

const App = () => {

  const [userData,setUserData] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const [isData, setData] = useState(false);

  const handleClick = async() => {
    const res = await axios.get('https://reqres.in/api/users?page=1')
    const data = res.data.data
    
    setUserData(data)
    setLoading(true);
    setData(true);
  }

  return (
      <div className="container dark">
        <nav className="navbar">
        <h1 className="navbar-brand">Userbase</h1>
        <button className="btn" onClick={handleClick}>Get Users</button>
        </nav>
          {isData ? null : <h1 className="title">Please click on <span>Get Users</span> button above to render the user data.</h1>}
          <UserCard isLoading={isLoading} setLoading={setLoading} userdata={userData} />
      </div>
  );
}

export default App;
