import React from 'react';
import { connect } from 'react-redux';
import './myAlert.style.scss';

const MyAlert = ({ view, content, style }) => {
  return view ? (
    <div className='alert-container'>
      <div className={`alert-box-container ${style}`}>
        <h2>
          {style === 'error' ? <span>&#9888;</span> : <span>&#10004;</span>}
          {content}
        </h2>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  view: state.alert.view,
  content: state.alert.content,
  style: state.alert.style,
});

export default connect(mapStateToProps)(MyAlert);
