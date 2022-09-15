import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Habilities from "./components/Habilities";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Education from "./components/Education";
import './App.scss';

const { about, technologies, education, experience, languages, habilities } = CV;

const App = () => {

  const [show, setShow] = useState();

  console.log(show);

  return (

    <div>
      <Education education={education} />
      <Experience experience={experience} />
      <Languages languages={languages} />
      <Habilities habilities={habilities} />
      <Header />
      <div className="navBarContainer">
        <button onClick={() => setShow("about")}>About</button>
        <button onClick={() => setShow("technologies")}>Technologies</button>
      </div>

      {show === 'about' ? <About about={about} /> : null}
      {show === 'technologies' && <Technologies technologies={technologies} />}

      <button>New</button>


    </div>



  );
}

export default App;
