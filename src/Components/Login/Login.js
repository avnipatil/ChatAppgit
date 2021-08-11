import React from 'react';
import './loginstyle.css';
import signimg from '../../img/signin.jpg'
import { Link } from 'react-router-dom';



const Login = () =>{
        
    return(
    <>
<div class="firstdiv" >
    <div class="theboxcontainer container">
            <div class="mainrowsec1 row">
                <div class="col md-6 col-lg-6 col-sm-12 col-xs-12">
                    <img src={signimg} width="70%" class="secimg"></img>
                </div>
        <div class="col md-6 col-lg-6 col-sm-12 col-xs-12">
             <div class ="maincontainer">
            <div class = "container">
            <div id="output"></div>
            <h2 class="signuptxt">Sign up</h2>
            <form class="form-box">
            <div class="input-icons">
                <i class="fa fa-envelope icon"></i>
                <input name="user" type="email" placeholder="Email" required/>
            </div> 
            <div class="input-icons">
            <i class="fa fa-lock icon"></i>
                <input type="password" placeholder="password" required/>
            </div> 
                    <div style={{display:'flex'}}>
                        <input class="checkwidth" type="checkbox" required />
                        <label class="labelagree">Remember me</label></div>
                   <div style={{display:'flex'}}><button type="submit" class="login">Login</button>
                    <Link to="/Register"><button type="submit" class="login">Register</button></Link></div> 
                     <div class="withlogintxt">
                        <label>Or login with</label>   
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-google"></a>
                    </div>               
            </form>
                    </div>
                </div>
                </div>

            </div>
        </div>

</div>  
    </>
    );
}
export default Login;
