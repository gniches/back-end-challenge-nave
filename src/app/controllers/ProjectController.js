import { Model } from 'sequelize';
import Project from '../models/Project';


class ProjectController {
    async index(req, res) {
        const projects = await Project.findAll();

        return res.json(projects);
    }

    async show(req, res) {
        const { project_id } = req.params;

        const project = await Project.findByPk(project_id, {
            include: { association: 'navers', through: {attributes: []}}
        });

        return res.json(project);
    }

    async store(req, res) {        
        const { name, navers } = req.body;    

        const project = await Project.create({
            name,
        });

        await project.setNavers(navers);

        return res.json(project);
    }    
    
}

export default new ProjectController();