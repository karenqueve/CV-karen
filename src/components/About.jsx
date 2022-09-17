import React from 'react';

export default function About({ about }) {
    return (
        <div>
            <div className='title'>
                <h1>About me</h1>
            </div>
            <div className="container">
                <p>🗺️ I live in {about.aboutMe.city} </p>
                <p>🗓️ My birthday: {about.aboutMe.birthDate}</p>
                <p>📧 
                    <a href={"mailto:"}>{about.aboutMe.email}</a>
                </p>
                <p>💾 
                    <a href={about.aboutMe.gitHub}>{about.aboutMe.gitHub}</a>
                    </p>
                <div>
                    <img src={require('../assets/is_my.jpg')} alt='' />
                </div>

            </div>


        </div>

    )
}

