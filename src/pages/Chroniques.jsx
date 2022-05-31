import React from 'react'
import Poste from '../components/choniques/poste'

const Chroniques = () => {
  return (
    <div className='chroniques'>
      <h1 style={{textAlign: 'center'}}>Derniers posts</h1>
      <div className="lastPost">
        <Poste />
        <Poste />
        <Poste />
      </div>
      <h1 style={{textAlign: 'center'}}>Tous les chroniques</h1>
      <div className="AllPost">
        <Poste />
        <Poste />
        <Poste />
        <Poste />
        <Poste />
        <Poste />
      </div>
    </div>
  )
}

export default Chroniques