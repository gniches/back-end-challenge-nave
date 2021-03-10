import express from 'express';
import NaversRoute from './app/routes/Navers';
import ProjectsRoute from './app/routes/Projects';
import './database/index';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './api.schema.json';

class App {
    constructor() {
        this.server = express();
        this.config();
        this.routers();        
    }

    config() {
        this.server.use(express.json());        
    }

    routers() {
        this.server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
        this.server.use(NaversRoute);
        this.server.use(ProjectsRoute);        
    }
}

export default new App().server;