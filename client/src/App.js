import './App.css';
import {Switch,Route,Link} from "react-router-dom"
import SignUp from './components/Signup/SignUp';
import SignIn from './components/Signin/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from "./components/PrivateRoute"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" ><button><Link to="/register">Signup</Link></button><button><Link to="/login">Signin</Link></button></Route>
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={SignIn} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
       {/*<PrivateRoute path="/ropfile" component={Profile} />*/}
      </Switch>
    </div>
  );
}

export default App;
