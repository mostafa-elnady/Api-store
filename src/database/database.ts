import { Pool } from 'pg';
import config from './config';




// const pool = new Pool({
//   user: config.user,
//   password: config.password,
//   host: config.host,
//   port: parseInt(config.dbPort as string, 10),
//   database: config.database,
// });


 const pool = new Pool({
  user: 'postgres',
  host: "localhost",
  password: "123456",
  database: "store_dev" || "store_test",
  port: 5432,
});

pool.on('error',(err:Error)=>{
  console.log('-------- error ------');
  
    console.error(err.message)
})


export default pool