import React, { Component } from 'react';
import './content.component.scss';

export default class ContentComponent extends Component<{
  className?: string;
}> {
  render() {
    return <div className={`content-container ${this.props.className || ''}`}>{this.props.children}</div>;
  }
}
