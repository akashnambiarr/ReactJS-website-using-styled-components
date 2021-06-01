import React from 'react'
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './Components'
import Home from './Pages/HomePage/Home'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar></Navbar>
      <Switch>
        <Route path ='/' exact component ={Home}/>
      </Switch>
    </Router>

  );
}

export default App;
