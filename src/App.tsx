import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './routes/Details/Details';
import Home from './routes/Home/Home';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Switch>
          <Route path="/details/:id" children={<Details />} />
          <Route path="/:page?/:search?" children={<Home />} />
          <Route path="/" children={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
