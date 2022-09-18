import React from 'react'

export default function Skills({ skills }) {
  return (
    <div>
        <div className="title">
            <h1>Habilidades</h1>
        </div>
        <div className="containerTechs">
            {
                skills.map((skill, index) => {
                    return (
                        <div key={index} className='containerTechno'>
                            <h2>{skill}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

