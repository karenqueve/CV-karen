import React from 'react';

export default function About({ about }) {
    return (
        <div className='title'>

            <h2>{about.name}</h2>

            <div className="card">

                {
                    about.map((about, index) => {
                        return (
                            <div key={index}>
                                <p>🗺️{about.city} </p>
                                <p>🗓️{about.birthDate}</p>
                                <p> 📧
                                    <a href={"mailto:" + about.email}>
                                        kyamilequevedo@gmail.com
                                    </a>
                                </p>
                                <p>💾<a href={about.gitHub}>
                                    https://github.com/karenqueve
                                </a></p>
                                <div>
                                    <img src={require('../assets/is_my.jpg')} alt='' />
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

