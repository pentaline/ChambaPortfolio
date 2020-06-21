import React from './react.js';
import ReactDOM from './react-dom.js';

function ContactCard(props){
  return (

  );
}

class ContactCard extends React.Component {
  render() {
    return (
      <div class="contacts w3-animate-opacity" id="max-chamberlain">
        <div class="contacts-header">
          <h2>Max Chamberlain</h2>
        </div>
        <div class="contacts-body">
        </div>
        <div class="contacts-footer">
          <h2>View Portfolio</h2>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <ContactCard />,
  document.getElementById('contact-cards')
);
