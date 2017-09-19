import React from 'react';
import ItemFooter from './ItemFooter';

export default class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem">
        <h3 className="Title">React Native 原理（译）</h3>
        <p className="Detail">
          Welcome to Hexo! This is your first post. Check documentation for more info.
          If you get any problems when using Hexo, you can find the answer in the troubleshooting or you can ask me on Github.
        </p>
        <ItemFooter/>
        <div className="Line"/>
      </div>
    );
  }
}
