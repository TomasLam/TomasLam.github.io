import './App.css';

import Home from "./Pages/Home"
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
            
          <Route path="/Contact">
            <Contact />
          </Route>  
        </Switch>      
      </Router>
    </div>
  );
}

export default App;
