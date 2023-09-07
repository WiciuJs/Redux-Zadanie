import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, resetForm } from './redux/eventsFormSlice';
import { addEvent } from './redux/eventsListSlice';
import { RootState } from './redux/store';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.eventsForm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    dispatch(setFormData({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmitClick = () => {
    if (!formData.name || !formData.eventName || !formData.city) {
      alert('Wypełnij wszystkie pola formularza.');
    } else {
      const newForm = {
        _id: 0, 
        name: formData.name,
        eventName: formData.eventName,
        city: formData.city,
      };

      fetch('http://127.0.0.1:5000/api/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newForm),
      })
        .then((response) => {
          if (response.ok) {
            alert('Dodano wydarzenie pomyślnie.');
            dispatch(addEvent(newForm));
            dispatch(resetForm());
          } else {
            throw new Error('Błąd podczas dodawania wydarzenia');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Wystąpił błąd podczas dodawania wydarzenia.');
        });
    }
  };

  return (
    <form>
      <div>
        <label>
          Imię i Nazwisko:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Wydarzenie:
          <select
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
          >
            <option value="">Wybierz Wydarzenie</option>
            <option value="Kurs Full Stack Developer">Kurs Full Stack Developer</option>
            <option value="Kurs Front End Developer">Kurs Front End Developer</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Miasto:
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="">Wybierz Miasto</option>
            <option value="Online">Online</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
          </select>
        </label>
      </div>
      <div>
        <button type="button" onClick={handleSubmitClick}>
          Zapisz na Szkolenie
        </button>
      </div>
    </form>
  );
};

export default Form;
