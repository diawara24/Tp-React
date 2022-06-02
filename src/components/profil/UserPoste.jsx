import React from 'react'

const UserPoste = ({title, index, handleClick}) => {
  return (
    <div className='profile-poste' onClick={() => handleClick(index)}>
          <div className='poste-title'>
            <img src="https://via.placeholder.com/50" alt="" />
            <h4>{title}</h4>
          </div>
    </div>
  )
}

export default UserPoste