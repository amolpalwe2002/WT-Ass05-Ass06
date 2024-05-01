import React, { useState } from 'react';
import { Table, Form, Button, FormControl } from 'react-bootstrap';

const Result = () => {
  const [prn, setPrn] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setPrn(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/result/${prn}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching result:', error));
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Semester Results</h2>
      <Form onSubmit={handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Enter PRN"
          className="mr-sm-2"
          value={prn}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <Button variant="primary" type="submit" style={buttonStyle}>
          Search
        </Button>
      </Form>
      {results.length > 0 && (
        <Table striped bordered hover style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Subject</th>
              <th style={tableHeaderStyle}>MSE Marks (30%)</th>
              <th style={tableHeaderStyle}>ESE Marks (70%)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.subject}</td>
                <td>{result.mse}</td>
                <td>{result.ese}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      
    </div>

    
  );
};

const containerStyle = {
  margin: '20px auto',
  maxWidth: '800px',
  padding: '20px',
  background: '#f9f9f9',
  borderRadius: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
};

const inputStyle = {
  width: '70%',
  marginRight: '10px',
  borderRadius: '20px',
  border: '2px solid #ddd',
};

const buttonStyle = {
  width: '20%',
  borderRadius: '20px',
  background: '#007bff',
  border: 'none',
};

const tableStyle = {
  marginTop: '20px',
  borderRadius: '20px',
};

const tableHeaderStyle = {
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#333',
  background: '#f1f1f1',
};

export default Result;
