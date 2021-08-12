import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { Switch, Route } from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <Navbar />
      </nav>

      <div style = {{ "display" : "flex"}}>
      <CountriesList />


      <Switch>
        <Route
          exact path='/countries/:id'
          render={(props) => (
            <CountryDetails {...props}/>
          )}
        />
      </Switch>
      </div>
    </div>

  );
}

export default App;
