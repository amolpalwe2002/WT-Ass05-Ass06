import React from 'react';
import { Form, Button } from 'react-bootstrap';

const MarksForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const prn = formData.get('prn');
    const subject = formData.get('subject');
    const mse = formData.get('mse');
    const ese = formData.get('ese');

    console.log(formData);

    try {
      const response = await fetch('http://localhost:5000/add-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prn, subject, mse, ese })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Marks added successfully:', data);
      } else {
        console.error('Error adding marks:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding marks:', error.message);
    }
  };

  return (
    <div style={formContainer}>
      <h2 style={formHeading}>Enter Marks</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPRN">
          <Form.Label style={labelStyle}>PRN</Form.Label>
          <Form.Control type="text" name="prn" style={inputStyle} required />
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Label style={labelStyle}>Subject</Form.Label>
          <Form.Control type="text" name="subject" style={inputStyle} required />
        </Form.Group>
        <Form.Group controlId="formMSE">
          <Form.Label style={labelStyle}>MSE Marks (30%)</Form.Label>
          <Form.Control type="number" name="mse" style={inputStyle} required />
        </Form.Group>
        <Form.Group controlId="formESE">
          <Form.Label style={labelStyle}>ESE Marks (70%)</Form.Label>
          <Form.Control type="number" name="ese" style={inputStyle} required />
        </Form.Group>
        <Button variant="primary" type="submit" style={submitButtonStyle}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const formContainer = {
  width: '50%',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  marginTop:'40px'
};

const formHeading = {
  textAlign: 'center',
};

const labelStyle = {
  fontSize: '16px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  cursor: 'pointer',
};

export default MarksForm;
