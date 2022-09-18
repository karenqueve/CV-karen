import React from 'react'

export default function Education({ education }) {
  return (
    <div>
        <div className="title">
            <h1>Educacion</h1>
        </div>
        <div>
            {
                education.map((education, index) => {
                    return (
                        <div key={index} className='container'>
                            <h2 style={{'font-weight': 'bold'}}>{education.name}</h2>
                            <h2>{education.date}</h2>
                            <h2 style={{'font-style': 'italic'}}>{education.where}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
