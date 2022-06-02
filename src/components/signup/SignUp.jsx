import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const SignUp = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            "name": name,
            "username": username,
            "password": password,
            "profileImage": ""
        }
        fetch(
            'http://localhost:8000/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            
            }
        )
        .then( (res) => {
            console.log(res);
            console.log("new user added successfully");
            navigate("/login")
        })
        
    }

    return (
        <div className='loginPage'>    
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text"  placeholder='psuedo' onChange={e => setName(e.target.value)} />
                <label htmlFor="">Username</label>
                <input type="text"  placeholder='psuedo' onChange={e => setUsername(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="password"  placeholder='password' onChange={e => setPassword(e.target.value)}/>
                <button>S'inscrire</button>
            </form>
        </div>
    )
}

export default SignUp