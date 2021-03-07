import Sequelize from 'sequelize';
import Naver from '../app/models/Naver';
import Project from '../app/models/Project';
import config from '../config/database';

const models = [
    Naver,
    Project,    
    
];

class Database {    
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }
}

export default new Database();