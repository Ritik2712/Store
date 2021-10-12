import './App.css';
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from './store'
import Form from './Components/Form';
import Store from './Components/Store'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Navbar/>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Form}/>
      <Route exact path="/stores" component={Store}/>
      <Route exact path="/edit/:id" component={Form}/>
      </Switch>
    </div>
    </Provider>
    </Router>
  );
}

export default App;
