const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')
const { connectDB } = require('./db');

const app = express();
connectDB();

app.get('/', (_req, res) => res.send('Welcome to my api!'));


module.exports = app;

async function start() {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.use('*', (_req, res) => res.status(404).send('Not Found'));


    app.listen(3000, () => {
        console.log('Server started on port 3000');
    })

}

start();