import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";


function App() {

  const [show, setShow] = useState();
  return (

    <div>
      <Header />
      <button onClick={() => setShow("about")}>About</button>
      <button onClick={() => setShow("technologies")}>Technologies</button>
      {show === 'about' ? <About /> : null}
      {show === 'technologies' ? <Technologies /> : null}

    </div>

  );
}

export default App;
