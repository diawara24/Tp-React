import React from 'react'
import { useNavigate } from 'react-router';

const poste = ({title, content, index}) => {

  const  navigate = useNavigate()
  const handleClick = () => {
    console.log(index);
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

  return (
    <div className='poste' >
       <div className='poste-title'>
        <img src="https://via.placeholder.com/50" alt="" />
        <h4 onClick={HandleClickView}>{title}</h4>
       </div>
        <div className='poste-content' onClick={HandleClickView}>
         {content}
        </div>
        <button onClick={handleClick} className="btn-delete">Supprimer</button>
    </div>
  )
}

export default poste