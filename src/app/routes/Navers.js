import { Router } from 'express';
import NaverController from '../controllers/NaverController';

const routes = new Router();

routes.get('/navers', NaverController.index);
routes.get('/navers/:id', NaverController.show);
routes.post('/navers', NaverController.store);
routes.put('/navers/:id', NaverController.update);
routes.delete('/navers/:id', NaverController.delete);

export default routes;