import React from 'react';

const TasksList = (props) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between shadow">
        <input type="checkbox" className="custom-control-input m-2" onClick={props.doneStyle} />
        <input
          type="text"
          disabled={props.disabled}
          className="a-task-input text-center"
          placeholder={props.value}
          ref={props.handleRef}
          style={{
            textDecoration: props.checkedRes,
            border: 'none',
            backgroundColor: 'var(--bs-list-group-bg)',
          }}
        />
        <span className="a-buttons">
          <button className="btn btn-info btn-sm me-1" id="a-edit-button" onClick={props.onEdit}>
            {props.buttonState}
          </button>
          <button
            className="btn btn-info btn-sm float-left a-delete"
            id={props.value}
            onClick={props.onDelete}>
            Delete
          </button>
        </span>
      </li>
    </>
  );
};

export default TasksList;
