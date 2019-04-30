import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Modal, Button, Preloader } from 'react-materialize';
import Moment from 'react-moment';

// Query for one launch
const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      details
      links {
        wikipedia
        mission_patch_small
      }
    }
  }
`;

export default function ItemDetails(props) {
  // console.log(flight_number);
  const flight_number = props.id;
  const trigger = (
    <Button waves="light" small className="grey darken-2">
      Details
    </Button>
  );
  return (
    <Modal
      trigger={trigger}
      options={{ preventScrolling: false }}
      className="grey lighten-2"
      style={{ maxHeight: '85%' }}
      actions={
        <div className="center-align">
          <Button className="grey" waves="light" modal="close">
            Close
          </Button>
        </div>
      }
    >
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className="center-align">
                <Preloader size="small" />
              </div>
            );
          if (error) {
            console.log(error);
            return <h5>Error fetching data</h5>;
          }
          const {
            mission_name,
            launch_date_local,
            launch_site: { site_name_long },
            launch_success,
            rocket: { rocket_name, rocket_type },
            details,
            links: { wikipedia, mission_patch_small }
          } = data.launch;
          return (
            <div>
              <h5>
                <b>Mission: </b>
                {mission_name}
              </h5>
              <b>Launch date: </b>
              <Moment format="MMM DD, YYYY">{launch_date_local}</Moment>
              <br />
              <b>Launch site:</b> {site_name_long}
              <br />
              <b>Launch:</b> {launch_success ? 'successful' : 'failed'}
              <br />
              <b>Rocket name:</b> {rocket_name}
              <br />
              <b>Rocket type:</b> {rocket_type}
              <br />
              <b>Details:</b> {details ? details : 'unavailable'}
              <br />
              <a className="truncate" href={wikipedia} target="blank">
                {wikipedia}
              </a>
              <br />
              {mission_patch_small ? (
                <div className="center-align">
                  <img
                    className="responsive-img"
                    src={mission_patch_small}
                    alt="Mission patch"
                  />
                </div>
              ) : null}
            </div>
          );
        }}
      </Query>
    </Modal>
  );
}
