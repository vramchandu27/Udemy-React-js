import React from "react";
import {Link} from 'react-router-dom'

const Head = () => 
{
    
  return(
   <div className="headerbg">
    
    <div class="ui attached stackable menu">
        <div className="content">
            <h4>UDEMY</h4>
        <div class="sub header">Learn which suits you</div>
    </div>

    <div class="ui container" >
      <div className="box">
        <a class="item" >
              <i class="home icon"></i><Link to="/home">Home</Link> 
        </a>
        </div>

        <div className="box">
        <a class="item">
             <i class="grid layout icon"></i><Link to="/about">About</Link>
        </a>
        </div>

        <div className="box">
        <a class="item">
            <i class="mail icon"></i><Link to="/contact">Contact</Link> 
        </a>
        </div>

        <div className="box">
        <a class="item">
            <i class="sort amount up icon"></i><Link to="/signup">Sign up</Link> 
        </a>
        </div>

        <div className="box">
        <a class="item">
            <i class="sign in alternate icon"></i><Link to="/signin">Sign in</Link> 
        </a>
        </div>

        <div className="box">
        <div class="ui simple dropdown item">
        More
        <i class="dropdown icon"></i>
        <div class="menu">
            <a class="item"><i class="edit icon"></i> Edit Profile</a>
            <a class="item"><i class="globe icon"></i> Choose Language</a>
            <a class="item"><i class="settings icon"></i> Account Settings</a>
        </div>
   </div>
   </div>
   <div class="right item">
     <div class="ui input"><input type="text" placeholder="Search..."/></div>
   </div>
  
 </div>
</div>
    
</div>
   
  );
}

export default Head;

