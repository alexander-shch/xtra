import mongoose from 'mongoose';

export default () => {
  const connect = () => {
    mongoose
      .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
        {
          dbName: process.env.DB_NAME,
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      )
      .then(() => {
        return console.info(`Successfully connected to ${process.env.DB_NAME}`);
      })
      .catch((error) => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  // Exec connection
  connect();
  // In case of disconnection reconnect
  mongoose.connection.on('disconnected', connect);
};
