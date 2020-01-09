import React, { useState, useEffect } from 'react';
import './App.css';
import { DefaultApi, Configuration, User } from './api-client';

const config = new Configuration({ basePath: 'http://localhost:8000' }); // TODO: This is for dev
export const apiClient = new DefaultApi(config);

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    apiClient.readUsers().then((response) => {
      setUsers(response.data);
    })
  })

  return (
    <div className="App">
      <ul>
        {users.map(user =>
          <li key={user.id}>{user.email}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
