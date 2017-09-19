/**
 * Footer of Item
 */
import React from 'react';
import ReadMoreButton from './ReadMoreButton';

export default class ItemFooter extends React.Component {
  render() {
    return (
      <div className="ItemFooter">
        <p className="Date">2017-08-30</p>
        <p className="Dot">·</p>
        <p className="Tag">React Native</p>
        <ReadMoreButton/>
      </div>
    );
  }
}
