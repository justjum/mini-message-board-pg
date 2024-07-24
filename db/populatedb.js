
const { Client } = require("pg");
const dotenv = require('dotenv');
const { argv } = require('node:process')

dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 )
);

INSERT INTO messages (username, message) 
VALUES
  ('Greg', 'Hello'),
  ('Polly', 'Is it me'),
  ('Paul', 'You''re looking for?');
`;

async function main() {
  console.log("seeding "+(argv[2]==='production' ? 'to production': 'locally'));
  console.log(argv[2])
  const client = new Client({
    connectionString: argv[2]==='production' ? process.env.PRODCONNECT : process.env.LOCALCONNECT
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();