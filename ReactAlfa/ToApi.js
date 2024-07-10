import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToApi = () => {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTodos = () => {
    fetch('http://localhost:8000/read', {  // Corrected endpoint
      method: 'GET'
    })
      .then((response) => response.json())
      .then((result) => {
        setTodos(result.allUsers);  // Adjusted result handling
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addTodo = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('http://localhost:8000/himanshu', {
      method: 'POST',
      body: JSON.stringify({ username, password }),  // Corrected data
      headers: myHeaders
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === '001') {
          toast.success('User added successfully');
          getTodos();
          handleClose();
        } else {
          toast.error('User not added');
          handleClose();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='p-2 d-flex justify-content-end'>
        <button className='btn btn-primary' onClick={handleShow}>Add User</button>
      </div>
      {todos.map((data, index) => (
        <div key={index}>
          <h3>{data.username}</h3>
          <h3>{data.password}</h3>
          <hr />
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
          <input type='text' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-warning' onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-primary' onClick={addTodo}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ToApi;
