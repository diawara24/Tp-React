import React, { useEffect, useState } from 'react'
import Poste from '../components/choniques/poste'

const Chroniques = () => {
  const [chroniques, setChroniques] = useState([])
  const [user, setUser] = useState(null);
  useEffect( () => {
    fetch(
      'http://localhost:8000/chroniques',
      {
          method: 'GET'
      }
    )
    .then( (response) => response.json())
    .then( data => {
      setChroniques(o => {
        const newState = [...data]
        return newState
      })
    })
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])


  

  return (
    
      <div className='chroniques'>
        <h1 style={{textAlign: 'center'}}>Derniers posts</h1>
        <div className="lastPost">
          {
            chroniques.slice(chroniques.length - 3, chroniques.length).map(
              (poste, index) => (
                <Poste key={index} title={poste.title} index={poste.id} genre={poste} auteur={poste.auteur} content={poste.poste} displayBtn={user.id === poste.userId ? true : false}/>
              )
            )
          }
        
          
        </div>
        <h1 style={{textAlign: 'center'}}>Tous les chroniques</h1>
        <div className="AllPost">
        {
            chroniques.map(
              (poste, index) => (
                <Poste key={index} index={poste.id}  title={poste.title} genre={poste} auteur={poste.auteur} content={poste.poste} displayBtn={user.id === poste.userId ? true : false}/>
              )
            )
          }
        </div>
      </div>

    
  )
}

export default Chroniques