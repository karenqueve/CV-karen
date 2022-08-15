import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import { CV } from './CV/CV';

const { about, technologies } = CV;

function App() {

  const [show, setShow] = useState();

  console.log(show);

  return (

    <div>
      <Header />
      <button onClick={() => setShow("about")}>About</button>
      <button onClick={() => setShow("technologies")}>Technologies</button>

      {show === 'about' ? <About /> : null}
      {show === 'technologies' && <Technologies technologies={technologies} />}

      <button>New</button>

    </div>

  );
}

export default App;
