import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState();

    const navigate = useNavigate()

    useEffect( () => {
        setUser(localStorage.getItem('user'))
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/users',
        {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            data.map(user => {
                if(user.username === username && user.password === password){
                    localStorage.setItem("user", JSON.stringify(user));
                    navigate('/profil')
                   return;
                }
            })
            setError("username/password incorrect")
           
        })
    }


    return (
        <div className='loginPage'>
            {
                !user ?
                    <form onSubmit={handleSubmit}>
                        <p style={{color: 'red'}}>{error}</p>
                            <label htmlFor="">pseudo</label>
                            <input type="text"  placeholder='psuedo' onChange={e => setUsername(e.target.value)} />
                            <label htmlFor="">Password</label>
                            <input type="password"  placeholder='password' onChange={e => setPassword(e.target.value)}/>
                            <button>Se connecter</button>
                    
                    </form>
                :
                <button onClick={e => {localStorage.removeItem('user'); setUser()}}>Log Out</button>
            }
        </div>
    )
}

export default Login