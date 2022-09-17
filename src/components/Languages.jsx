import React from 'react'

export default function Languages({ languages }) {
  return (
    <div>
        <div className="title">
            <h1>Languages</h1>
        </div>
        <div className="container">
            {
                languages.map((language, index) => {
                    return (
                        <div key={index}>
                            <h2>{language.language}</h2>
                            <h2>{language.nivel}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
