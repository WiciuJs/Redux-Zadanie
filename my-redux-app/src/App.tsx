import React from "react";
import Form from "./Form";
import Table from './Table';
import "./App.css";

const App: React.FC = () => {

  return (
    <div className="container">
      <h1>Formularz Zapisu Na Kurs</h1>
      <Form />
      <Table />
    </div>
  );
};

export default App;