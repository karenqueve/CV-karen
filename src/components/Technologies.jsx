import React from 'react';


export default function Technologies({ technologies }) {
    return (
        <div>
            <div className='title'>
                <h1>Technologies</h1>
            </div>

            <div className='container'>

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

        </div>
    )
}

