
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    password: String
    role: String
    google: Boolean
}

type Query {
    hello: String
    getAllUsers: [User]
    getUser(_id: ID): User
}

input UserInput {
    name: String
    email: String
    password: String
    role: String
}

type Mutation {

    createUser(userInput: UserInput): User
    deleteUser(_id: ID!): String
    updateUser(_id: ID!, userInput: UserInput): User
}

`

module.exports = { typeDefs };