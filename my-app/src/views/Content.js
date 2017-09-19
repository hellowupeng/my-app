/**
 * 右边内容区域
 */
import React, {Component} from 'react';
import '../css/Content.css';
import ListItem from './ListItem';

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>
    );
  }
}
