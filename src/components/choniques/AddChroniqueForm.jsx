import React, { useState } from 'react'

const AddChroniqueForm = () => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAuteur, setInputAuteur] = useState('');
    const [inputGenre, setInputGenre] = useState('');
    const [inputPoste, setInputPoste] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const chronique = {
            title: inputTitle,
            auteur: inputAuteur,
            genre: inputGenre,
            poste: inputPoste
        }
        
        fetch(
            'http://localhost:8000/chroniques',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(chronique)
               
            }
        )
        .then( (res) => {
            console.log(res);
            console.log("new chronique added successfully");
            setInputTitle('');
            setInputGenre('');
            setInputAuteur('');
            setInputPoste('');
        })
    }


    return (
        <div className="AddChroniqueForm">
            <h1>Ajouter une Chronique</h1>
           
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Titre : <br />
                        <input type="text" name="titre"  className='input-title' required
                        onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} />
                    </label>
                </div>
                <div>
                    <label>
                        Auteur : <br />
                        <input type="text" name="name"  className='input-auteur' required
                        onChange={(e) => setInputAuteur(e.target.value)} value={inputAuteur}/>
                    </label>
                </div>
                <div>
                    <label>
                        Genre : <br />
                        <select name="genre" id="" className='input-genre' required
                             onChange={(e) => setInputGenre(e.target.value)} value={inputGenre}>
                        <option value=""></option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Poste : <br />
                    <textarea name="" id=""  className='input-poste' required
                        onChange={(e) => setInputPoste(e.target.value)}
                        value={inputPoste}>

                    </textarea>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Envoyer"  className='btn-submit'/>
                </div>
            </form>
        </div>
    )
}

export default AddChroniqueForm