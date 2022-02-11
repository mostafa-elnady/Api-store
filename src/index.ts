import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

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

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
