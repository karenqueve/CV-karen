import React from 'react'

export default function About({ about }) {
    return (
        <div>
            <h1>Estoy dentro de About</h1>

            <h2>{about.name}</h2>
        </div>
    )
}
