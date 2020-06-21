import React from 'react';
import largeLogo from "../../Assets/images/logo-large.png";

export class FooterBar extends React.Component {
    render() {
        return (
            <footer>
    	        <p class="w3-animate-left">Powered by </p>
    		<img class="w3-animate-right" src={largeLogo} alt="Chamba Logo" />
  	    </footer>
	);
    }
}