import React, { useState } from 'react';
import ReactDOM from "react-dom";
import data from "./data"
import Card from "./components/card"
import './App.css';

function App() {
    const [member, setMember] = useState(data);
    // const addNewMember => member {
    //   setMember ([...member, member]);
    // };

  return (
    <div className="App">
      <Card member={member} />
    </div>
  );
}

export default App;
