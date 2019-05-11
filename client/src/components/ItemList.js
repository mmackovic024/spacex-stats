import React from 'react';
import { Waypoint } from 'react-waypoint';
import ItemDetails from './ItemDetails';

export default function Item({ launches, onLoadMore }) {
  return (
    <div>
      {launches.map((launch, index) => {
        const {
          flight_number,
          mission_name,
          launch_year,
          launch_success
        } = launch;
        return (
          <div
            key={flight_number}
            className="grey darken-3 grey-text text-lighten-4 row valign-wrapper"
          >
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
            {index === launches.length - 3 && (
              <Waypoint
                onEnter={onLoadMore}
                fireOnRapidScroll={true}
                bottomOffset="-600px"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
