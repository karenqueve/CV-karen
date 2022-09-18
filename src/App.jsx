import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Education from "./components/Education";
import './App.scss';
import { CV } from './CV/Cv';

const { about, technologies, education, experience, languages, skills } = CV;

const App = () => {

  const [show, setShow] = useState('about');

  return (

    <div>
      <Header />
      <div className="navBarContainer">
        <button onClick={() => setShow("about")}>Sobre mi</button>
        <button onClick={() => setShow("education")}>Educacion</button>
        <button onClick={() => setShow("technologies")}>Technologias</button>
        <button onClick={() => setShow("experience")}>Experiencia</button>
        <button onClick={() => setShow("languages")}>Idiomas</button>
        <button onClick={() => setShow("skills")}>Habilidades</button>
      </div>

      {show === 'about' ? <About about={about} /> : null}
      {show === 'education' ? <Education education={education} /> : null}
      {show === 'technologies' ? <Technologies technologies={technologies} /> : null}
      {show === 'experience' ? <Experience experiences={experience} /> : null}
      {show === 'languages' ? <Languages languages={languages} /> : null}
      {show === 'skills' ? <Skills skills={skills} /> : null}



    </div>



  );
}

export default App;
