import Naver from '../models/Naver';

class NaverController {
    async index(req, res) {
        const navers = await Naver.findAll();

        return res.json(navers);
    }

    async show(req, res) {
        const { naver_id } = req.params;

        const findNaver = await Naver.findByPk(naver_id);

        if (!findNaver) {
            return res.status(400).json({error: 'Naver not found!'});
        }

        const naver = await Naver.findByPk(naver_id, {
            include: { association: 'projects', through: {attributes: []}}
        });

        return res.json(naver);
    };     
    
    async store(req, res) {
        const { name, job_role, birth_date, admission_date, projects } = req.body;

        if(!name || !job_role || !birth_date || !admission_date) {
            return res.status(400).json({ error: 'Insert all required fields'});
        }

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

        const findNaver = await Naver.findByPk(naver_id);

        if (!findNaver) {
            return res.status(400).json({error: 'Naver not found!'});
        }

        const [ naver ] = await Naver.update(req.body, {
            where: { id: naver_id },
        });

        if(naver >= 1) {
            return res.json({msg: 'Naver changed with success!'});
        } else {
            return res.json({msg: 'Naver could not be changed.'});
        }
        
    }

    async delete(req, res) {
        const { naver_id } =  req.params;

        const findNaver = await Naver.findByPk(naver_id);

        if (!findNaver) {
            return res.status(400).json({error: 'Naver not found!'});
        }

        const deleted = await Naver.destroy({
            where: {id: naver_id}
        });

        if(deleted >= 1) {
            return res.json({msg: 'Naver deleted with success!'});
        } else {
            return res.json({msg: 'Naver could not be deleted.'});
        }

    }
}

export default new NaverController();