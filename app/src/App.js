import React from 'react';
import './App.css';
import stylesheet from './Assets/stylesheet.css';
import {NavBar} from './Components/NavBar/NavBar';
import {FooterBar} from './Components/FooterBar/FooterBar';
import {ContactCard} from './Components/ContactCard/ContactCard';


function App() {
  return (
<div>
    <NavBar/>
    <div className="spacer"></div>
    <main>
      <ContactCard />
      <ContactCard name="Jacob Manis" />
      <br/>
      <div class="apply w3-animate-opacity">
      </div>
    </main>
    <FooterBar />
</div>
  );
}


export default App;
