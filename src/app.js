import express from 'express';
import NaversRoute from './app/routes/Navers';
import ProjectsRoute from './app/routes/Projects';
import './database/index';

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
        this.server.use(NaversRoute);
        this.server.use(ProjectsRoute);
    }
}

export default new App().server;