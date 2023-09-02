import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormData } from './redux/types';
import { addEvent } from './redux/eventsListSlice';



const Form: React.FC = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<FormData>({
    name: '',
    eventName: '',
    city: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    name: '',
    eventName: '',
    city: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmitClick = () => {
    const newForm = {
      name: form.name,
      eventName: form.eventName,
      city: form.city,
    };

    const formErrors: Record<string, string> = {};

    if (!newForm.name) {
      formErrors.name = 'Wypełnij Imię i Nazwisko';
    }

    if (!newForm.eventName) {
      formErrors.eventName = 'Wybierz Wydarzenie';
    }

    if (!newForm.city) {
      formErrors.city = 'Wybierz Miasto';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      dispatch(addEvent(newForm));
      setForm({
        name: '',
        eventName: '',
        city: '',
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
            value={form.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
      </div>
      <div>
        <label>
          Wydarzenie:
          <select
            name="eventName"
            value={form.eventName}
            onChange={handleInputChange}
          >
            <option value="">Wybierz Wydarzenie</option>
            <option value="Kurs Full Stack Developer">Kurs Full Stack Developer</option>
            <option value="Kurs Front End Developer">Kurs Front End Developer</option>
          </select>
          {errors.eventName && <span className="error">{errors.eventName}</span>}
        </label>
      </div>
      <div>
        <label>
          Miasto:
          <select
            name="city"
            value={form.city}
            onChange={handleInputChange}
          >
            <option value="">Wybierz Miasto</option>
            <option value="Online">Online</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
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
