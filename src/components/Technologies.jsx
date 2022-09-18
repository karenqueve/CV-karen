import React from 'react';


export default function Technologies({ technologies }) {
    return (
        <div>
            <div className='title'>
                <h1>Technologias</h1>
            </div>

            <div className='containerTechs'>

                {
                    technologies.map((technology, index) => {
                        return (
                            <div key={index} className='containerTechno'>
                                <h2>{technology.name}</h2>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

