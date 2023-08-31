import React from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from './redux/actions';
import { FormData } from './redux/types';
import Form from './Form'; 
import Table from './Table';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (newForm: FormData) => {
    dispatch(addFormData(newForm));
  };
  function handleDelete(_index: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="container">
      <h1>Formularz Zapisu Na Kurs</h1>
      <Form handleSubmit={handleSubmit} />
      <Table handleDelete={handleDelete} />
    </div>
  );
};

export default App;
