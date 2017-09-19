/**
 * Profile
 */
import React from 'react';
import avatar from '../images/avatar.jpg';

export default class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <img className="avatar" src={avatar} alt="avatar" />
        <h2>hello, wupeng</h2>
        <p>iOS/Android/RN</p>
      </div>
    );
  }
}
