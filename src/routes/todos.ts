import { Router, Request, Response } from 'express'
import Todo from "../models/Todo";

const router = Router();

const todos: Array<Todo> = [
  {
    id: 1,
    description: 'Buy some stuff',
    isDone: false
  }
];


router.get('', function(req: Request, res: Response) {
  res.status(200);
  res.send(todos);
  res.end();
});


export default router;
