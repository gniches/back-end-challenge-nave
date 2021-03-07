import { Router } from 'express';
import ProjectController from '../controllers/ProjectController';


const routes = new Router();

routes.get('/projects', ProjectController.index);
routes.get('/projects/:project_id', ProjectController.show);
routes.post('/projects', ProjectController.store);


export default routes;