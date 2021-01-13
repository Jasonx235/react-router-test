import React from 'react';
import './App.css';
import About from './pages/About';
import Shop from './pages/Shop';
import Nav from './components/Nav';

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {

  render(){
  return (
    <Router>

    <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/shop" exact component={Shop}/>
        </Switch>
    </div>

    </Router>
  );
  }
}

const Home = () =>(
  <div>
    <h1>Home</h1>
  </div>

)
export default App;
