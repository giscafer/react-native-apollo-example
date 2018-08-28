import mongoose from 'mongoose';
import bluebird from 'bluebird';

export default (url: string) => {
  mongoose.set('debug', true);
  mongoose.Promise = bluebird;
  mongoose.connect(url, { promiseLibrary: require('bluebird'), useNewUrlParser: true })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
};
