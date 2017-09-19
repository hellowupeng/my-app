import React from 'react';
import Button from '../components/Button';

export default class Subject extends React.Component {
  render() {
    return (
      <div className="Subject">
        <Button title="博客"/>
        <Button title="分类"/>
        <Button title="关于"/>
      </div>
    );
  }
}
