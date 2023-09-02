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
    const newForm = {
      name: formData.name,
      eventName: formData.eventName,
      city: formData.city,
    };

    if (!newForm.name || !newForm.eventName || !newForm.city) {
      alert('Wypełnij wszystkie pola formularza.');
    } else {
      dispatch(addEvent(newForm));
      dispatch(resetForm());
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
