//packages and libraries and hooks
import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import Content from "./components/Content";

//styles
import "./styles/App.css";

function App() {
  const [name, setName] = useState("Macbook");
  function sayHi() {
    return "Hello WOrld";
  }

  function clickHandler(event) {
    console.log("I got clicked!", event);
  }

  function againClickHandler(name, event) {
    console.log(`Yo ${name}, you clicked another button!!!`, event);
    setName(name);
  }

  return (
    <div className="home">
      <Navbar />
      <h1>{sayHi()}</h1>
      <p>{name}</p>
      <button onClick={clickHandler}>Click</button>
      <button
        onClick={(e) => {
          againClickHandler("Arjun", e);
        }}
      >
        Click Again
      </button>

      <Content />
    </div>
  );
}

export default App;
