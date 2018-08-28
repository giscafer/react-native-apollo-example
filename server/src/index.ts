import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from './models/db';
import schema from './graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

// Load environment variables from .env file
dotenv.config({ path: '../.env' });
const port = process.env.PORT || '3000';
const dbURL = process.env.MONGODB_URI_LOCAL;

const app = express();

// Connect to database
console.log(dbURL)
const db = mongoose(dbURL);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../../client/dist')));

// API location

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(port, () => console.log(`Running on localhost:${port}`));
