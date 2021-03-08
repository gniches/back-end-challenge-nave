import { Router } from 'express';
import NaverController from '../controllers/NaverController';

const routes = new Router();

routes.get('/navers', NaverController.index);
routes.get('/navers/:naver_id', NaverController.show);
routes.post('/navers', NaverController.store);
routes.put('/navers/:naver_id', NaverController.update);
routes.delete('/navers/:naver_id', NaverController.delete);

export default routes;