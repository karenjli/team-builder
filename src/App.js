import React, { useState } from 'react';
import ReactDOM from "react-dom";
import data from "./data"
import Card from "./components/card"
import Form from "./components/form"
import './App.css';

function App() {
    const [members, setMembers] = useState(data);
    const addNewMembers = member => {
      setMembers ([...members, member]);
    };

  return (
    <div className="App">
      <Form addNewMembers = {addNewMembers}/>
      <Card member={members} />
     
    </div>
  );
}

export default App;
