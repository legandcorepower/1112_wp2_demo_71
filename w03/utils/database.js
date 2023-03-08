const  { Pool } = require('pg');

let pool;

if(process.env.NODE_ENV === "SUPABASE"){
     pool = new Pool({
        user:"postgres",
        host:process.env.HOST,
        port:"5432",
        database: 'postgres',
        password:process.env.PASSWORD,
    });
    console.log(`Connecting PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);
}else{
     pool = new Pool({
        user:"postgres",
        host:"localhost",
        port:"5432",
        database: 'wp2_demo_71',
        password:'0000'
    });
}



console.log(`Connecting PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);

module.exports = pool;