import React from 'react';


export default function About({ about }) {
    return (
        <div className='title'>
            <h1>Estoy dentro de About</h1>

            <h2>{about.name}</h2>
            <img src={require('../assets/is_my.jpg')} alt='' />
        </div>
    )
}
