import ListLinks from './components/staticPages/ListLinks';
import Home from './components/staticPages/Home';
import About from './components/staticPages/About';
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
