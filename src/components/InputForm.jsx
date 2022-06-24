import React from 'react';

const InputForm = (props) => {
  return (
    <form onSubmit={props.onHandleAddTask}>
      <input
        className="text-center rounded shadow me-2"
        type="text"
        placeholder="Write some Task"
        value={props.value}
        onChange={props.onHandleChange}
      />
      <button type="submit" name="submit" value="submit" className="rounded shadow">
        Add
      </button>
    </form>
  );
};

export default InputForm;
