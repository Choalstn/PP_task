import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  width: 56px;
  height: 54px;
  font-size: 30px;
  background-color: rgb(130, 215, 247);
  font-weight: 500;
  margin: 20px;
  margin-top: 40px;
`;

function App() {
  const [value, setValue] = useState(0);

  const addTask = () => {
    setValue(value + 1);
  };

  const doneTask = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonContainer>
          <Button onClick={addTask}>+</Button>
          {value}
          <Button onClick={doneTask}>-</Button>
        </ButtonContainer>
      </header>
    </div>
  );
}

export default App;
