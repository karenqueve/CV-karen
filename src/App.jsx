import Header from "./components/Header";
import './App.css';
import { useState } from "react";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {

  const [show, setShow] = useState();
  return (

    <div>
      <button onClick={() => setShow("about")}>About</button>
      {show === 'about' ? <About /> : null}
      <button onClick={() => setShow("technologies")}>Technologies</button>
      {show === 'technologies' ? <Technologies /> : null}
      <Header />
    </div>

  );
}

export default App;
