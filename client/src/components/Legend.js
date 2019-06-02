import React from 'react';

export default function Legend() {
  return (
    <div
      className="row center-align grey-text"
      style={{ margin: '1rem 0', fontSize: '1.1rem' }}
    >
      <span className="col s12 m4" style={{ marginBottom: '1rem' }}>
        <span className="green-text" style={{ marginRight: '.4rem' }}>
          &#9608;{''}
        </span>
        = Launch Success
      </span>
      <span className="col s12 m4" style={{ marginBottom: '1rem' }}>
        <span className="red-text" style={{ marginRight: '.4rem' }}>
          &#9608;{''}
        </span>
        = Launch Fail
      </span>
      <span className="col s12 m4" style={{ marginBottom: '1rem' }}>
        <span className="blue-text" style={{ marginRight: '.4rem' }}>
          &#9608;{''}
        </span>
        = Status unavailable
      </span>
    </div>
  );
}
