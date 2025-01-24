import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ImportCSV from './pages/ImportCSV';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/import" component={ImportCSV} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;