import Naver from '../models/Naver';
import Projects from '../models/Project';

class NaverController {
    async index(req, res) {
        const navers = await Naver.findAll();
        return res.json(navers);
    }

    async show(req, res) {
        const { naver_id } = req.params;

        if (!naver_id) {
            return res.status(400).json({error: 'Naver not found!'});
        }

        const naver = await Naver.findByPk(naver_id, {
            include: { association: 'projects', through: {attributes: []}}
        });

        return res.json(naver);
    };

    //Problemas ao adicionar um naver sem um projeto associado a ele. 
    //Possiveis soluções: Enviar um array vazio no req.body, permitir nulo no model, validar esse dado...
    async store(req, res) {
        const { name, job_role, birth_date, admission_date, projects } = req.body;

        const naver = await Naver.create({
            name,
            job_role,
            birth_date,
            admission_date
        });

        await naver.setProjects(projects);

        return res.json(naver);
    }

    async update(req, res) {
        const { naver_id } = req.params;

        const [ naver ] = await Naver.update(req.body, {
            where: { id: naver_id },
        });

        return res.json(naver);
    }

    async delete(req, res) {
        const { naver_id } =  req.params;

        const deleted = await Naver.destroy({
            where: {id: naver_id}
        });

        return res.json(deleted);
    }
}

export default new NaverController();