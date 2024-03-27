import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import axios from 'axios';

const LoginModal = () => {
  const [show, setShow] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    emailid: '',
    password: ''
  });

  const handleClose = () => setShow(false); // Function to close the modal
  const handleShow = () => setShow(true); // Function to show the modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      console.log('User logged in successfully');
      // You can handle login success here
      handleClose(); // Close the modal after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Sign in</Button> {/* Button to open the modal */}
      <Modal show={show} onHide={handleClose}> {/* Modal component */}
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" name="emailid" value={formData.emailid} onChange={handleChange} required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <Button variant="primary" type="submit">Login</Button> {/* Submit button inside modal */}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
