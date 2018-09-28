import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from 'react-bootstrap';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import VideoProject from './components/videoproject/videoProject';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <Route exact path="/" component={Dashboard} />
        <Route path="/video" component={VideoProject} />
      </Grid>
    );
  }
}

export default App;
