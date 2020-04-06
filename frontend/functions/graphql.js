const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    user: User
    users: [User!]!
  }

  type User {
    id: String!
    name: String
    email: String
    password: String
  }
`;

const resolvers = {
  Query: {
    user: () => {
      return {
        id: 878,
        name: 'Anas Latique',
        email: 'anaslatique@gmail.com',
        password: 'grdsefdntesfg'
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    methods: 'POST',
    allowedHeaders: [
      'Content-Type',
      'Origin',
      'Accept'
    ]
  }
});