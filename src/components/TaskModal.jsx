import React from 'react';

const TaskModal = ({ isOpen, onClose, onSubmit, title, setTitle, description, setDescription,from }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title ? 'Edit Task' : 'Create Task'}</h3>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          style={{marginBottom:10,padding:10,borderRadius:4,fontWeight:'500'}}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          cols={30}
          rows={4}
          style={{marginBottom:10,padding:10,borderRadius:4,fontWeight:'500'}}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={onSubmit}>{from == 2 ? 'Update Task' : 'Add Task'}</button>
        <button style={{marginLeft:10}} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskModal;
