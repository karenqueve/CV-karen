import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import { CV } from './CV/CV';
import './App.scss';

const { about, technologies } = CV;

function App() {

  const [show, setShow] = useState();

  console.log(show);

  return (

    <div>
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
