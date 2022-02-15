import dotenv from 'dotenv';

dotenv.config();

// import 'dotenv/config'

const { PORT ,
    NODE_ENV,
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_DB_TEST,
    POSTGRES_PORT
} = process.env;


export default {
  port: PORT,
  node_env:NODE_ENV,
  dbPort:POSTGRES_PORT,
  host:POSTGRES_HOST,
  user:POSTGRES_USER,
  password:POSTGRES_PASSWORD,
  database:NODE_ENV === 'development' ? POSTGRES_DB : POSTGRES_DB_TEST
  
}
