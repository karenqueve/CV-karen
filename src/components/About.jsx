import React from 'react';

export default function About({ about }) {
    return (
        <div>
            <div className='title'>
                <h1>Sobre mi</h1>
            </div>
            <div className="containerAbout">
                <div className='containerImage'>
                    <img src={require('../assets/is_my.jpg')} alt='' />
                </div>
                <div className="data">
                    <h2>🗺️ Actualmente vivo en {about.aboutMe.city} </h2>
                    <h2>🗓️ Mi fecha de nacimiento es {about.aboutMe.birthDate}</h2>
                    <h2>Puedes contactar conmigo a través de:</h2>
                    <div className="contactData">
                        <h3>📧 
                            <a href={"mailto:"}>{about.aboutMe.email}</a>
                        </h3>
                        <h3>💾 
                            <a href={about.aboutMe.gitHub}>{about.aboutMe.gitHub}</a>
                            </h3>
                    </div>
                </div>

            </div>


        </div>

    )
}

