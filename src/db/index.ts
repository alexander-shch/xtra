import mysql, { Connection } from 'mysql';

export default function DB(query: string) {
  const createConnection = (): Promise<Connection> =>
    new Promise((res) => {
      const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB_NAME,
      });
      res(connection);
    });

  const connect = (connection: Connection): Promise<Connection> =>
    new Promise((res, rej) => {
      connection.connect((err) => {
        if (err) return rej(err);
        return res(connection);
      });
    });

  const execQuery = (
    connection: Connection
  ): Promise<{ connection: Connection; result: any }> =>
    new Promise((res, rej) => {
      connection.query(query, (error, result) => {
        if (error) return rej(error);
        return res({ connection, result });
      });
    });

  return createConnection()
    .then((connection) => connect(connection))
    .then((connection) => execQuery(connection))
    .then(({ connection, result }) => {
      connection.end((err) => {
        err && console.error(err);
      });
      return result;
    });
}
