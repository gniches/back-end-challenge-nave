import Project from '../models/Project';

class ProjectController {
    async index(req, res) {
        const projects = await Project.findAll();

        return res.json(projects);
    }

    async show(req, res) {
        const { project_id } = req.params;
        
        const findProject = await Project.findByPk(project_id);
        
        if(!findProject) {
            return res.status(400).json({ error: 'Project not found'});
        }

        const project = await Project.findByPk(project_id, {
            include: { association: 'navers', through: {attributes: []}}
        });        

        return res.json(project);
    }
    //Problemas ao adicionar um projeto sem um naver associado a ele. 
    //Possiveis soluções: Enviar um array vazio no req.body, permitir nulo no model, validar esse dado...
    async store(req, res) {        
        const { name, navers } = req.body;
        
        if(!name) {
            return res.status(400).json({ error: 'Insert a project name'});
        }
        
        const project = await Project.create({
            name,
        });

        await project.setNavers(navers);

        return res.json(project);
    }
    
    async update(req, res) {        
        const { project_id } = req.params;

        const findProject = await Project.findByPk(project_id);
        
        if(!findProject) {
            return res.status(400).json({ error: 'Project not found'});
        }    

        const [ project ] = await Project.update(req.body, {
            where: { id: project_id }
        });

        if(project >= 1) {
            return res.json({msg: 'Project altered with success!'});
        } else {
            return res.json({msg: 'The project could not be changed.'});
        }
                
    }
    
    async delete(req, res) {
        const { project_id } = req.params;

        const findProject = await Project.findByPk(project_id);
        
        if(!findProject) {
            return res.status(400).json({ error: 'Project not found'});
        }

        const deleted = await Project.destroy({
            where: {id: project_id}
        });

        if(deleted >= 1) {
            return res.json({msg: 'Project deleted with success!'});
        } else {
            return res.json({msg: 'The project could not be deleted.'});
        }
        
    }
    
}

export default new ProjectController();