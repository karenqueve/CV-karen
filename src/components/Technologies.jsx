import React from 'react'

export default function Technologies({ technologies }) {
    return (
        <div>
            <h1>Technologies</h1>

            {
                technologies.map((technology, index) => {
                    return (
                        <div key={index}>
                            <h2>{technology.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

