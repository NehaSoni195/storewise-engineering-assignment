import React from 'react';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
     <div className="description-container">
        <p>{task.description}</p>
      </div>
        
      <button onClick={onEdit}>Edit</button>
      <button style={{marginLeft:10}} onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Task;








// import { useEffect, useState } from 'react';

// // eslint-disable-next-line react/prop-types
// const Task = ({ id }) => {

//   const [taskName, setTaskName] = useState(null);

//   useEffect(() => {
//     if (taskName === null) {
//       const storedName = sessionStorage.getItem(`task-${id}`);
    
//       let taskName = `Task #${id+1}`;
//       if (!storedName) {
//         sessionStorage.setItem(`task-${id}`, `Task #${id+1}`);
//       }

//       setTaskName(storedName || taskName );
//     }
//   }, [taskName, id]);

//   return (
//     <div style={{padding:15,borderRadius:20}}>{taskName}</div>
//   ) 
// };

// export default Task;
