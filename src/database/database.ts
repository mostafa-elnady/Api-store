import { Pool } from 'pg';
import config from './config';




const pool = new Pool({
  user: config.user,
  password: config.password,
  host: config.host,
  port: parseInt(config.dbPort as string, 10),
  database: config.database,
});



pool.on('error',(err:Error)=>{
  console.log('-------- error ------');
  
    console.error(err.message)
})


export default pool