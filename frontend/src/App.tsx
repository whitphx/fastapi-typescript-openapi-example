import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

interface User {
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users/').then(response => {
      setUsers(response.data);
    });
  })

  return (
    <div className="App">
      <ul>
        {users.map(user =>
          <li>{user.email}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
