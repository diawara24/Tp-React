import React from 'react'

const AddChroniqueForm = () => {
  return (
    <div className="AddChroniqueForm">
        <h1>Ajouter une Chronique</h1>
        <form>
            <div>
                <label>
                    Titre : <br />
                    <input type="text" name="name"  className='input-title'/>
                </label>
            </div>
            <div>
                <label>
                    Poste : <br />
                   <textarea name="" id=""  className='input-poste'></textarea>
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