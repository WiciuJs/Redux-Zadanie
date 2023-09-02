import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectEvents, deleteEvent } from './redux/eventsListSlice';


const Table: React.FC = () => {
  const dispatch = useDispatch();
  const formDataList = useSelector(selectEvents);

  const handleDeleteClick = (index: number) => {
    dispatch(deleteEvent(index)); 
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Imię i Nazwisko</th>
            <th>Wydarzenie</th>
            <th>Miasto</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{formData.name}</td>
              <td>{formData.eventName}</td>
              <td>{formData.city}</td>
              <td>
                <button className="Usun" onClick={() => handleDeleteClick(index)}>
                  Usuń
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
