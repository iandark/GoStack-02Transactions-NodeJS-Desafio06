import { Router } from 'express';

import transactionsRouter from './transactions.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.status(204).send();
});

routes.use('/transactions', transactionsRouter);

export default routes;
