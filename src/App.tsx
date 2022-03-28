import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Spinner, Navbar, Alignment, Button } from "@blueprintjs/core";

// using JSX:
const mySpinner = <Spinner intent="primary" />;

// I'm a full stack developer who enjoys advocating for other developers.
// Send me an email - email@mramos.dev
// https://www.linkedin.com/in/marco-ramos-dev
// https://github.com/mramos-dev

function App() {
  return (
    <div className="App">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Marco Ramos</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp4-minimal" icon="home" text="Home" />
          <Button className="bp4-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {mySpinner}
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
        <p>Hey</p>
      </header>
    </div>
  );
}

export default App;
