const { buildSchema } = require('graphql');

// buildSchema version

module.exports = buildSchema(`
type Launch {
    flight_number: Int
    mission_name: String
    launch_year: String
    launch_date_local: String
    launch_success: Boolean
    rocket: Rocket
    launch_site: Launchsite
    links: Link
    details: String
}

type Rocket {
    rocket_id: String
    rocket_name: String
    rocket_type: String
}

type Launchsite {
    site_name_long: String
}

type Link {
    wikipedia: String
    mission_patch_small: String
}

type RootQuery {
    launches: [Launch]
    launch(flight_number: Int!): Launch
    rockets: [Rocket]
    rocket(id: String!): Rocket
}

schema {
    query: RootQuery
}
`);
