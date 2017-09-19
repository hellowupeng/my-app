/**
 * Button
 */
import React from 'react';
import '../css/Button.css';

export default class Button extends React.Component {
  onClick() {
    console.log('onClick()');
  }

  render() {
    const { title } = this.props;
    return (
      <button className="Button" onClick={() => this.onClick()}>{title}</button>
    );
  }
}
