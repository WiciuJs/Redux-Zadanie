import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFormData } from './redux/actions';
import { RootState } from './redux/store';
import { FormData } from './redux/types';

interface TableProps {
  handleDelete: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ handleDelete }) => {
  const dispatch = useDispatch();
  const formDataList = useSelector((state: RootState) => state.formDataList);

  const handleDeleteClick = (index: number) => {
    dispatch(deleteFormData(index));
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
