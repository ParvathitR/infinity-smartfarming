import './App.css';
import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Overview from './pages/Overview';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route path='/Overview' render={props =>
            <Overview
              {...props}
            />}
          />
         {/* <Route path='/Select' render={props =>
            <Select
              {...props}
            />}
          />

          <Route path='/Monitor' render={props =>
            <Monitor
              {...props}
            />}
          />
          <Route path='/Maintain' onUpdate={() => window.scrollTo(0, 0)} render={props =>
            <Maintain
              {...props}
              exportPreview={exportPreview}
              setExportPreview={setExportPreview}
            />}
          />
          <Route path='/Report' render={props =>
            <Report
              {...props}
            />}
          /> */}
          <Redirect from='/' exact to='/Overview' />
        </Switch>
    </div>
  );
}

export default withRouter(App);
