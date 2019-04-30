import React from 'react';

export default function Legend() {
  return (
    <div
      className="center-align grey-text"
      style={{ margin: '1rem 0', fontSize: '1.1rem' }}
    >
      <span>
        <span className="green-text" style={{ margin: '0 .4rem' }}>
          &#9608;{''}
        </span>
        = Launch Success
      </span>
      <span>
        <span className="red-text" style={{ margin: '0 .4rem 0 4rem' }}>
          &#9608;{''}
        </span>
        = Launch Fail
      </span>
    </div>
  );
}
