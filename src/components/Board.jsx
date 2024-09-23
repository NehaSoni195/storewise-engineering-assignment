import { useState } from 'react';
import Task from './Task';
import TaskModal from './TaskModal';

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [from,setFrom] = useState(1);

  const handleSubmit = () => {
    if (editingTaskIndex !== null) {
      // Update task
      const updatedTasks = tasks.map((task, index) => 
        index === editingTaskIndex ? { title, description } : task
      );
      setTasks(updatedTasks);
    } else {
      // Create new task
      setTasks([...tasks, { title, description }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setEditingTaskIndex(null);
    setModalOpen(false);
  };

  const handleEdit = (index) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditingTaskIndex(index);
    setModalOpen(true);
    setFrom(2);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Tasks ({tasks.length})</h2>
      <button onClick={() => {
        setModalOpen(true);
        setFrom(1);
        }}>Create Task</button>

      <TaskModal 
        isOpen={modalOpen} 
        onClose={resetForm} 
        onSubmit={handleSubmit} 
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        from = {from}
      />

      <div className="task-list">
        {tasks.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            // from = {from}
            onEdit={() => handleEdit(index)} 
            onDelete={() => handleDelete(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Board;








// import { useState } from 'react';
// import Task from './Task';

// const Board = () => {
//   const [tasks, setTasks] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [editingTask, setEditingTask] = useState(null);

//   const handleSubmit = () => {
//     if (editingTask !== null) {
//       // Update task
//       const updatedTasks = tasks.map((task, index) => 
//         index === editingTask ? { title, description } : task
//       );
//       setTasks(updatedTasks);
//     } else {
//       // Create new task
//       setTasks([...tasks, { title, description }]);
//     }
//     resetForm();
//   };

//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setEditingTask(null);
//     setModalOpen(false);
//   };

//   const handleEdit = (index) => {
//     setTitle(tasks[index].title);
//     setDescription(tasks[index].description);
//     setEditingTask(index);
//     setModalOpen(true);
//   };

//   const handleDelete = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="container">
//       <h2>Tasks ({tasks.length})</h2>
//       <button onClick={() => setModalOpen(true)}>Create Task</button>

//       {modalOpen && (
//         <div className="modal">
//           <h3>{editingTask !== null ? 'Edit Task' : 'Create Task'}</h3>
//           <input 
//             type="text" 
//             placeholder="Title" 
//             value={title} 
//             onChange={(e) => setTitle(e.target.value)} 
//           />
//           <textarea 
//             placeholder="Description" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)} 
//           />
//           <button onClick={handleSubmit}>{editingTask !== null ? 'Update Task' : 'Add Task'}</button>
//           <button onClick={resetForm}>Cancel</button>
//         </div>
//       )}

//       <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', borderRadius: 20 }}>
//         {tasks.map((task, index) => (
//           <div key={index} style={{ margin: 15, borderRadius: 30, border: '1px solid #222', background: '#fff' }}>
//             <li>
//               <Task title={task.title} description={task.description} />
//               <button onClick={() => handleEdit(index)}>Edit</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Board;










// // import {useState} from 'react';
// // import Task from './Task';

// // const Board = () => {

// //   const [totalTasks, setTotalTasks] = useState(2);
  

// //   const increment = () => {
    
// //     setTimeout(() => {
// //       // a blocking process that should run before we increment totalTasks value
// //       // this is commented out for the assignment , but we need it to be here
// //       // blockingFunction()
      
// //       setTotalTasks(totalTasks + 1);
// //     }, 500);
// //   };
 
// //   return (
// //     <div className="container">
// //       <h2>Tasks ({totalTasks})</h2>
// //       {/* <button>Clone Task</button> */}
// //       <button onClick={increment}>Create Task</button>

// //       <ul style={{display:'flex',flexDirection:'row',flexWrap:'wrap',borderRadius:20}}> 
// //       {Array.from(Array(totalTasks).keys()).map((i) =>
// //       {
// //         return(
// //           <div style={{margin:15,borderRadius:30,border:'1px solid #222',background:'#fff'}}>
// //             <li key={i}>
// //               <Task id={i}/>
// //             </li>
// //           </div>
// //         )
// //     }
// //       )}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Board;


