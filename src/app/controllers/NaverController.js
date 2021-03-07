import Naver from '../models/Naver';
//import Project from '../models/Project';


class NaverController {
    async index(req, res) {
        const navers = await Naver.findAll();
        return res.json(navers);
    }

    async show(req, res) {
    };

    async store(req, res) {
        //const { name, job_role, birth_date, admission_date } = req.body;

        const naver = await Naver.create(req.body);

        return res.json(naver);
    }

    async update(req, res) {
        //const { name, job_role, birth_date, admission_date } = req.body;
        const { id } = req.params;

        const [ naver ] = await Naver.update(req.body, {
            where: { id: id },
        });

        return res.json(naver);
    }

    async delete(req, res) {
        const { id } =  req.params;

        const deleted = await Naver.destroy({
            where: {id: id}
        });

        return res.json(deleted);
    }
}

export default new NaverController();