import ListLinks from './components/ListLinks';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
    <div className = "appBody">
    <Router>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/about' component = {About} />
        <Route path = '/listlinks' component = {ListLinks} />
      </Switch> 
    </Router> 
    </div>
    </>
  );
}

export default App;
