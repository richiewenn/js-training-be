import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

import todosRoute from './routes/todos';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use('/api/todos', todosRoute);

app.listen(3000);
