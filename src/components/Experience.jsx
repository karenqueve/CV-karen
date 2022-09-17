import React from 'react'

export default function Experience({ experiences }) {
  return (
    <div>
        <div className="title">
            <h1>Experience</h1>
        </div>
        <div className="container">
            {
                experiences.map((experience, index) => {
                    return (
                        <div key={index}>
                            <h2>{experience.name}</h2>
                            <h2>{experience.date}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
