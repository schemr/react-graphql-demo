import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_END_POINT
});
console.log(process.env)
export default client;