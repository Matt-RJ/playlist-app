import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// DB connect
mongoose.connect(process.env.mongoDB);
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(`database connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('database disconnected');
});

db.on('open', () => {
  console.log(`database connected to ${db.name} on ${db.host}`);
});