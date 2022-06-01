import React from 'react'

const poste = ({title, auteur, genre, content, index}) => {
  return (
    <div className='poste'>
       <div className='poste-title'>
        <img src="https://via.placeholder.com/50" alt="" />
        <h4>{title}</h4>
       </div>
        <div className='poste-content'>
         {content}
        </div>
    </div>
  )
}

export default poste