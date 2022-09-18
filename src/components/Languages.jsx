import React from 'react'

export default function Languages({ languages }) {
  return (
    <div>
        <div className="title">
            <h1>Idiomas</h1>
        </div>
        <div className='containerTechs'>
            {
                languages.map((language, index) => {
                    return (
                        <div key={index} className="containerTechno">
                            <h2 style={{'font-weight': 'bold'}}>{language.language}</h2>
                            <h2>{language.nivel}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
