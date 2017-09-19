import React from 'react';
import './css/App.css';
import Pane from './views/Pane';
import Content from './views/Content';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pane/>
        <Content/>
      </div>
    );
  }
}
