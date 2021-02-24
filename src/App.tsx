import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/:page?/:search?" children={<Home />} />
          <Route path="/" children={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
