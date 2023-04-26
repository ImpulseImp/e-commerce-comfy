import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  background: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: navy;
  }
`;

const App = () => {
  return (
    <div>
      <h1>comfy sloth starter</h1>
      <Button>click me</Button>
    </div>
  );
};

export default App;
