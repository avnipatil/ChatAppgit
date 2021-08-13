import React from 'react';
import './topnavstyle.css';



const Topnav = () =>{
    return(
    <>
    <div class="dropdown">
   <div><i class="fa fa-ellipsis-v"></i></div> 
    <div class="dropdown-content">
        <a href="https://blog.hubspot.com/">Blog</a>
        <a href="https://academy.hubspot.com/">Academy</a>
        <a href="https://www.youtube.com/user/hubspot">YouTube</a>
    </div>
    </div>



    </>
    );
}
export default Topnav;