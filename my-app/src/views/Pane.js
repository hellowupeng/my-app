/**
 * 左边窗口
 */
import React, { Component } from 'react';
import '../css/Pane.css';
import Profile from './Profile';
import Subject from './Subject';
import Social from './Social';

export default class Header extends Component {
  render() {
    return (
      <div className="Pane">
        <Profile/>
        <Subject/>
        <Social/>
      </div>
    );
  }
}
