import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';

//Components List 
import Login from "./Components/Login/Login"
import Register from './Components/Register/Register';
import Topnav from './Components/Topnav/Topnav';
import Chatmain from './Components/Chatmain/Chatmain'
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
              <Route path="/Topnav" exact={true} component={Topnav}/>
              <Route path="/Chatmain" exact={true} component={Chatmain}/> 
          </Switch>
        </div>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
