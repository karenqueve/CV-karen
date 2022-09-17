import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Habilities from "./components/Habilities";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Education from "./components/Education";
import './App.scss';
import { CV } from './CV/Cv';

const { about, technologies, education, experience, languages, habilities } = CV;

const App = () => {

  const [show, setShow] = useState();

  console.log(show);

  return (

    <div>
      <Header />
      <div className="navBarContainer">
        <button onClick={() => setShow("about")}>About me</button>
        <button onClick={() => setShow("education")}>Education</button>
        <button onClick={() => setShow("technologies")}>Technologies</button>
        <button onClick={() => setShow("experience")}>Experience</button>
        <button onClick={() => setShow("languages")}>Languages</button>
        <button onClick={() => setShow("habilities")}>Habilities</button>
      </div>

      {show === 'about' ? <About about={about} /> : null}
      {show === 'education' ? <Education education={education} /> : null}
      {show === 'technologies' ? <Technologies technologies={technologies} /> : null}
      {show === 'experience' ? <Experience experiences={experience} /> : null}



    </div>



  );
}

export default App;
