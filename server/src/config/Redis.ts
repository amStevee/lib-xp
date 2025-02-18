import * as redis from 'redis';

const redisClient = redis.createClient({
    url: 'redis://127.0.0.1:6379', // The connection URL format is 'redis://host:port'
    // password: '', // Optional: add if Redis requires a password
  });

  redisClient.on('connect', () => {
    console.log('Connected to Redis');
  });
  
  // Event listener for errors
  redisClient.on('error', (err: Error) => {
    console.error('Error connecting to Redis:', err);
  });

  redisClient.connect()

  
export default redisClient;
