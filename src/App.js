import logo from './logo.svg';
import './App.css';
// import Register from "./components/Register/register"
import Login from "./Components/Login/Login"
import Register from './Components/Register/Register';
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={Login} />
              <Route path="/Login" exact={true} component={Login}/>
              <Route path="/Register" exact={true} component={Register}/>
                 
          </Switch>
        </div>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
