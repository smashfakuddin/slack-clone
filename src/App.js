import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function App() {
  return (
    <Router>
      <>
        <Header />

        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;