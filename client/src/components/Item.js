import React from 'react';
import ItemDetails from './ItemDetails';

export default function Item(props) {
  const {
    flight_number,
    mission_name,
    launch_year,
    launch_success
  } = props.launch;
  return (
    <div className="grey darken-4 grey-text lighten-5">
      <div className="row valign-wrapper">
        <div className="col m9 s8">
          <h5 style={{ marginTop: '1.5rem' }}>
            Mission:{' '}
            <span className={launch_success ? 'green-text' : 'red-text'}>
              {mission_name}
            </span>
          </h5>
          <h6 style={{ marginBottom: '1.5rem' }}>Year: {launch_year}</h6>
        </div>
        <div className="col m3 s4">
          <ItemDetails id={flight_number} />
        </div>
      </div>
    </div>
  );
}
