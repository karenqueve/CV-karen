import React from 'react'

export default function Habilities({ habilities }) {
  return (
    <div>
        <div className="title">
            <h1>Habilities</h1>
        </div>
        <div className="container">
            {
                habilities.map((hability, index) => {
                    return (
                        <div key={index}>
                            <h2>{hability}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

