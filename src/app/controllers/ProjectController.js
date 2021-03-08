import Project from '../models/Project';

class ProjectController {
    async index(req, res) {
        const projects = await Project.findAll();

        return res.json(projects);
    }

    //Falta Conferir validação
    async show(req, res) {
        const { project_id } = req.params;

        if (!project_id) {
            return res.status(400).json({error: 'Project not found!'})
        };

        const project = await Project.findByPk(project_id, {
            include: { association: 'navers', through: {attributes: []}}
        });

        return res.json(project);
    }
    //Problemas ao adicionar um projeto sem um naver associado a ele. 
    //Possiveis soluções: Enviar um array vazio no req.body, permitir nulo no model, validar esse dado...
    async store(req, res) {        
        const { name, navers } = req.body;    
        
        const project = await Project.create({
            name,
        });

        await project.setNavers(navers);

        return res.json(project);
    }
    
    async update(req, res) {        
        const { project_id } = req.params;

        const [ project ] = await Project.update(req.body, {
            where: { id: project_id }
        });

        return res.json(project);        
    }
    //Falta Conferir validação
    async delete(req, res) {
        const { project_id } = req.params;

        const project = await Project.destroy(
            {
                where: {id: project_id}
            });

            if(res.json(project) === [1]) {
                return res.json({msg: 'Project altered with success!'})
            }
        
            return;
    }
    
}

export default new ProjectController();