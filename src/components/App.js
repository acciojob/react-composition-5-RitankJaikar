
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tabNum, setTabNum] = useState(["Tab 1", "Tab 2", "Tab 3"]);
  const [tabNumSelected, setTabNumSelected] = useState("Tab 1");
  const [tabAlph, setTabAlph] = useState(["Tab A", "Tab B", "Tab C"]);
  const [tabAlphSelected, setTabAlphSelected] = useState("Tab A");

  return (
    <div>
      <ul>
        {tabNum.map(tab => 
          <li key={tab} onClick={() => setTabNumSelected(tab)}>
            {tab}
          </li>
        )}
      </ul>
      <p>Content for {tabNumSelected}</p>
      <br />
      <ul>
        {tabAlph.map(tab => 
          <li key={tab} onClick={() => setTabAlphSelected(tab)}>
            {tab}
          </li>
        )}
      </ul>
      <p>Content for {tabAlphSelected}</p>
    </div>
  )
}

export default App
