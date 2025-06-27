import * as redis from 'redis';
import dotenv from 'dotenv';
import { logger } from '../logger';
dotenv.config()

const redisClient = redis.createClient({
    url: process.env.REDIS_URL, 
    // password: '', // Optional: add if Redis requires a password
  });

  redisClient.on('connect', () => {
    console.log('Connected to Redis');
  });
  
  // Event listener for errors
  redisClient.on('error', (err: Error) => {
    logger.error('Error connecting to Redis:', err);
    console.error('Error connecting to Redis:', err)
  });

  redisClient.connect()

  
export default redisClient;
