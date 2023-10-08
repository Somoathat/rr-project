import logo from './logo.svg';
import React, { useState } from 'react';
import AllCollapseExample from './components/Gallery'
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  
const [show, toggleShow] = useState(true);

return (
  <>
    {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
    <Toast show={show} onClose={() => toggleShow(false)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>Test</Toast.Body>
    </Toast>
    <AllCollapseExample/>
  </>
);
}

export default App;
