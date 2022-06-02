import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailPoste = () => {
    const {idPoste} = useParams();
    const [poste, setPoste] = useState({})

     useEffect(() => 
        {
            fetch(
                `http://localhost:8000/chroniques/${idPoste}`,
                {
                    method: 'GET'
                }
            )
            .then( response => response.json())
            .then( data => {setPoste(data)
               console.log(poste);
            })

        })

    return (
    <div className='detailPoste'>
        <div className='author'>
            <img src="https://via.placeholder.com/150" alt="" />
            <hgroup>
                <h5>
                    <i>Auteur: {poste.auteur}</i>
                </h5>
                <h6><i>Genre: {poste.genre}</i></h6>
            </hgroup>
        </div>
        <div  className='posteContent1'>
             <h1>{poste.title}</h1>
             <p>
                 {
                     poste.poste
                 }
             </p>
        </div>
    </div>
  )
}

export default DetailPoste