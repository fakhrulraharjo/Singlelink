const { Pool } = require('pg')
console.log(`${process.env.PGUSER}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`)

const client = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

// Test DB Connection
client.connect((err: string) => {
    if (err) {
        console.log('Singlelink: Database connection error!')
        throw err;
    }
    console.log("Singlelink: Connected to PostgreSQL instance.");
});

export default client