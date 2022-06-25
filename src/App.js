import "./style.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");

  function toggleButton() {
    if (state == "") {
      setState(" forward");
    } else if (state == " forward") {
      setState(" reverse");
    } else if (state == " reverse") {
      setState(" forward");
    }
  }

  return (
    <div className={`body${state}`}>
      <div className={`toggle${state}`} onClick={toggleButton}>
        <span className={`circle${state}`}></span>
      </div>
      <h4 class="text">I Love You</h4>
    </div>
  );
}

export default App;
