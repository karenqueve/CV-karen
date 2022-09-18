import React from 'react'

export default function Experience({ experiences }) {
  return (
    <div>
        <div className="title">
            <h1>Experiencia</h1>
        </div>
        <div>
            {
                experiences.map((experience, index) => {
                    return (
                        <div key={index} className="container">
                            <h2 style={{'font-weight': 'bold'}}>{experience.name}</h2>
                            <h2>{experience.date}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
