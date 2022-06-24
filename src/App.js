import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TasksList from './components/TasksList';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [warning, setWarning] = useState(' ');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setWarning('You must write some Task');
    } else {
      setTasks((tasks) => [
        ...tasks,
        { task: input, disabled: true, buttonState: 'Edit', checked: 'none', border: null },
      ]);
      setInput('');
      setWarning(' ');
    }
  };

  const handleEdit = (index) => {
    const oneTask = tasks[index];
    if (oneTask.buttonState === 'Edit') {
      setTasks((tasks) => [...tasks], ((oneTask.disabled = false), (oneTask.buttonState = 'Save')));
    } else {
      setTasks((tasks) => [...tasks], ((oneTask.disabled = true), (oneTask.buttonState = 'Edit')));
    }
  };

  const handleDone = (index) => {
    const doneCheck = tasks[index];
    if (doneCheck.checked === 'none') {
      setTasks((tasks) => [...tasks], (doneCheck.checked = 'line-through'));
    } else {
      setTasks((tasks) => [...tasks], (doneCheck.checked = 'none'));
    }
  };

  const handleDelete = (index) => {
    setTasks((tasks) =>
      tasks.filter((_el, i) => {
        return index !== i;
      }),
    );
  };

  return (
    <div
      style={{ backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)', minHeight: 700 }}
      className={'container my-5 text-center rounded'}>
      <h1 className="my-3 py-3" style={{ marginTop: 50 }}>
        Whats new for Today
      </h1>
      <span className="text-danger fs-2">{warning}</span>
      <InputForm onHandleChange={handleChange} onHandleAddTask={handleAddTask} value={input} />
      <ul className="list-group m-3">
        {tasks.map((el, index) => (
          <TasksList
            key={el.task}
            value={el.task}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
            doneStyle={() => handleDone(index)}
            disabled={el.disabled}
            buttonState={el.buttonState}
            checkedRes={el.checked}
            borderRes={el.border}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
