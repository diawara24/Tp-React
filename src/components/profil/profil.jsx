import React, { useEffect, useState } from 'react'
import UserPoste from './UserPoste'

const Profil = () => {
  const [user, setUser] = useState()
  const [userChroniques, setUserChroniques] = useState([])
  const [content, setContent] = useState('')
  useEffect( () => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  },[])

  useEffect( () => {
    fetch('http://localhost:8000/chroniques', {
        method: 'GET'
      })
      .then( response => response.json())
      .then( data => {
        data.map( chronique => {
          if (chronique.userId === user.id) {
            setUserChroniques(o => {
              const newState =[...o, chronique]
              return newState
            });
          }
        })
      })
  }, [user])

  const handleClick = (id) => {
    fetch(`http://localhost:8000/chroniques/${id}`, {
        method: 'GET'
      })
      .then( response => response.json())
      .then( data => {
        setContent(data.poste)
      })
  }
  return (
    
    <div className='profile-container'>
      <div className='profile-row'>
        { user &&
          <div>
            <img src="https://via.placeholder.com/150" alt="" />
            <h3>{user.username}</h3>
          </div>
        }
        {
           userChroniques.slice(userChroniques.length - 2 , userChroniques.length).map(
            (chronique, index) => (
              <UserPoste key={index} title={chronique.title} index={chronique.id} handleClick={handleClick}/>
            )
          )
        }
        
     </div>
     { content &&
      <div className='posteContent'>
         {content}
      </div>
    }
    </div>
  )
}

export default Profil