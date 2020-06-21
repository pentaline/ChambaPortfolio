import React from 'react';
import largeLogo from "../../Assets/images/logo-large.png";

export class NavBar extends React.Component {
    render() {
        return (
	    <div id="header">
      		<a href="./index.html">
        	    <img  class="w3-animate-left" src={largeLogo} alt="Chamba Logo" />
      		</a>
    	    </div>
        );
    }
}