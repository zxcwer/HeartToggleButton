import "./style.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  function toggleButton() {
    const toggle = document.querySelector(".toggle");
    const body = document.querySelector(".body");
    const circle = document.querySelector(".circle");
    toggle.addEventListener("click", () => {
      if (toggle.classList.contains("nothing")) {
        body.classList.replace("nothing", "forward");
        toggle.classList.replace("nothing", "forward");
        circle.classList.replace("nothing", "forward");
      } else if (toggle.classList.contains("reverse")) {
        body.classList.replace("reverse", "forward");
        toggle.classList.replace("reverse", "forward");
        circle.classList.replace("reverse", "forward");
      } else if (toggle.classList.contains("forward")) {
        body.classList.replace("forward", "reverse");
        toggle.classList.replace("forward", "reverse");
        circle.classList.replace("forward", "reverse");
      }
    });
  }
  return (
    <div className="body nothing">
      <div className="toggle nothing" onClick={toggleButton}>
        <span className="circle nothing"></span>
      </div>
      <h4 class="text">I Love You</h4>
    </div>
  );
}

export default App;
