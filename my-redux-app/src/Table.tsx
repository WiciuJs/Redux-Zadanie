import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents, deleteEvent, setEvents } from './redux/eventsListSlice';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const formDataList = useSelector(selectEvents);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/getEvents');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(setEvents(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleDeleteClick = (eventId: number) => {
    fetch(`http://127.0.0.1:5000/api/deleteEvent/${eventId}`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch(deleteEvent(eventId)); 
      })
      .catch((error) => {
        console.error(error);
      });
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
            <tr key={formData._id}>
              <td>{index + 1}</td>
              <td>{formData.name}</td>
              <td>{formData.eventName}</td>
              <td>{formData.city}</td>
              <td>
                <button className="Usun" onClick={() => handleDeleteClick(formData._id)}>
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
