import express, { Application, Request, Response , NextFunction} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import ErrorInterface from './interfaces/error.interface';

const app: Application = express();

// http request logger middleware
app.use(morgan('common'));
// http security middleware
app.use(helmet());
//middleware to parse incoming request (parse json data in req.body)
app.use(express.json());
// Apply the rate limiting middleware to all requests
app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 60 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'To many requested from this ip , please try again after an hour ',
  })
);

//get request
app.get('/', (req: Request, res: Response) => {
  // throw new Error('error exist ');
  res.json({
    message: 'hello , you are welcome',
  });
});

//post request
app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    massage: 'hello mo ',
    data: req.body,
  });
});

// handle error of wrong route
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: ' you are lost , read the api documentation ',
  });
});

// handle error that i am  throwing
app.use((err: ErrorInterface, req: Request, res: Response , next:NextFunction) => {
  const status = err.status || 500;
  const message = err.message || ' whoops something error ';
  res.status(status).json({ status, message });
});
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
