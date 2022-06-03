import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const poste = ({title, content, index, displayBtn}) => {
  const  navigate = useNavigate()
  const handleClick = () => {
    fetch(`http://localhost:8000/chroniques/${index}`,
    {
      method:'DELETE',
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(res => {res.text()
      location.reload()})
    .then(res => console.log(res))
    
  }

  const HandleClickView = () => {
    navigate(`/detailPoste/${index}`)
  }

  const handleClickUpdate = () => {
    navigate(`/addChronique/${index}`)
  }

  return (
    <div className='poste' >
       <div className='poste-title'>
        <img src="https://via.placeholder.com/50" alt="" />
        <h4 onClick={HandleClickView}>{title}</h4>
       </div>
        <div className='poste-content' onClick={HandleClickView}>
         {content.substring(0, 50) + " ..."} 
        </div>
        { displayBtn &&
          <>  
             <button onClick={handleClick} className="btn-delete">Supprimer</button>
             <button onClick={handleClickUpdate} className="btn-update">Modifier</button>
          </>
         
        }
        
    </div>
  )
}

export default poste