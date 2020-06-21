import React from 'react';

export class ContactCard extends React.Component {
  render() {
    return (
      <div className="contacts w3-animate-opacity" id={this.props.name}>
        <div className="contacts-header">
          <h2>{this.props.name}</h2>
        </div>
        <div className="contacts-body">
        </div>
        <div className="contacts-footer">
          <h2>View Portfolio</h2>
        </div>
      </div>
    );
  }
}

ContactCard.defaultProps = {name: "Oops! You forgot to enter a name for this one!"};