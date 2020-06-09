import React, { Component } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default class Box extends Component<{
  title: string;
  titleIcon?: JSX.Element;
  subtitle?: string;
  buttonText?: string;
  buttonIcon?: IconProp;
  buttonAction?: () => void;
}> {
  render() {
    return (
      <div className='box'>
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <div>
                <h3 className='title is-spaced is-4'>{this.props.title} {this.props.titleIcon}</h3>
                {this.props.subtitle &&
                <p className='subtitle is-6 has-text-grey has-text-weight-light'>
                  {this.props.subtitle}
                </p>}
              </div>
            </div>
          </div>
          {this.props.buttonText &&
            <div className='level-right'>
              <div className='level-item'>
                <button className='button is-warning' onClick={this.props.buttonAction}>
                  <span>{this.props.buttonText}</span>
                </button>
              </div>
            </div>
          }
        </div>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
