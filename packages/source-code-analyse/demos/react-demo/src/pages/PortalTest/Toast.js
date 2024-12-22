import React from 'react';
import ReactDOM from 'react-dom';
import './Toast.css';

export default class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.querySelector('body');
  }

  render() {
    return ReactDOM.createPortal(
      (
          <div className="toast">
              <div className="toast-inner">
                {this.props.text}
              </div>
          </div>
      ),
      this.el,
    );
  }
}