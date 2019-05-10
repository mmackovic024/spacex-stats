import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Preloader } from 'react-materialize';
import Legend from './Legend';
import Item from './Item';

// Query for all launches
const LAUNCHES_QUERY = gql`
  query LaunchesQuery($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;

export default function ItemList() {
  return (
    <Fragment>
      <h2 className="black white-text center-align">Launches</h2>
      <Legend />
      <Query
        query={LAUNCHES_QUERY}
        variables={{
          limit: 10,
          offset: 0
        }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className="center-align">
                <Preloader size="small" />
              </div>
            );
          if (error) console.log(error);

          return (
            <Fragment>
              {data.launches.map(launch => (
                <Item key={launch.flight_number} launch={launch} />
              ))}
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
}
