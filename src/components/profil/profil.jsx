import React from 'react'

const Profil = () => {
  return (
    <div className='profile-container'>
     <div className='profile-row'>
        <div>
          <img src="https://via.placeholder.com/150" alt="" />
          <h3>Diawara24</h3>
        </div>
        <div className='profile-poste'>
          <div className='poste-title'>
            <img src="https://via.placeholder.com/50" alt="" />
            <h4>Lorem ipsum dolor</h4>
          </div>
        </div>
        <div className='profile-poste'>
          <div className='poste-title'>
            <img src="https://via.placeholder.com/50" alt="" />
            <h4>Lorem ipsum dolor</h4>
          </div>
        </div>
     </div>
     <div className='posteContent'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Sit doloremque deserunt sed magnam vel voluptate modi labore temporibus odio,
        commodi et fugit id soluta nostrum maxime provident. Optio, numquam sunt?
     </div>
    </div>
  )
}

export default Profil