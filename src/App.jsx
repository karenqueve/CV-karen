import Header from "./components/Header";
import './App.css';
import { useState } from "react";


function App() {

  const [showAbout, setShowTechnologies] = useState();
  return (

    <div>
      <button onClick={() => showAbout()}>About</button>
      <button onClick={() => setShowTechnologies()}>Technologies</button>
      <Header />
    </div>

  );
}

export default App;
