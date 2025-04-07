import { useState } from 'react'
import './App.css'

function App() {
    const [users, setUsers] = useState([]);

    const getUsers = async ()=>{
        const request = await fetch(
          'api/users',
            {
                method: 'GET',
            }
        );
        const a = await request.json();
        setUsers(a);
    }

  return (
    <>
        <div className="App">
            <button onClick={()=> getUsers()}>Загрузить список пользователей</button>
        </div>

        <ul>
            {users.map((user, index) => <li key={index}>{user['name']}</li>)}
        </ul>
    </>
  )
}

export default App
