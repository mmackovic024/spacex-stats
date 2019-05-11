import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Preloader } from 'react-materialize';
import Legend from './Legend';
import ItemList from './ItemList';

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

export default function ItemQuery() {
  return (
    <>
      <h2 className="black white-text center-align">Launches</h2>
      <Legend />
      <Query
        query={LAUNCHES_QUERY}
        variables={{
          limit: 10,
          offset: 0
        }}
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading)
            return (
              <div className="center-align">
                <Preloader size="small" />
              </div>
            );
          if (error) console.log(error);

          return (
            <ItemList
              launches={data.launches || []}
              onLoadMore={() =>
                fetchMore({
                  variables: {
                    offset: data.launches.length
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return {
                      __typename: 'Launch',
                      launches: [...prev.launches, ...fetchMoreResult.launches]
                    };
                  }
                })
              }
            />
          );
        }}
      </Query>
    </>
  );
}
