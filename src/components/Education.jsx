import React from 'react'

export default function Education({ education }) {
  return (
    <div>
        <div className="title">
            <h1>Education</h1>
        </div>
        <div className="container">
            {
                education.map((education, index) => {
                    return (
                        <div key={index}>
                            <h2>{education.name}</h2>
                            <h2>{education.date}</h2>
                            <h2>{education.where}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
