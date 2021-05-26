import React, { useContext } from 'react';

import '../assets/styles/components/TodoForm.scss';

import TodoAppContext from '../context/TodoAppContext';

const TodoForm = ({ name, description, handleInputChange, handleSubmit }) => {
  const { todoUpdate } = useContext(TodoAppContext);

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        onChange={handleInputChange}
        value={name}
        name='name'
        type='text'
        placeholder='Nombre'
      />

      <textarea
        onChange={handleInputChange}
        value={description}
        name='description'
        placeholder='Descripción'
        cols='30'
        rows='10'
      ></textarea>
      <button className='todo-form__btn'>
        <span>{todoUpdate ? 'Actualizar' : 'Guardar'}</span>
        <i className='fas fa-save'></i>
      </button>
    </form>
  );
};

export default TodoForm;
