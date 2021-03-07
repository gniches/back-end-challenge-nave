import Sequelize, { Model } from 'sequelize';
import Project from './Project';

class Naver extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            job_role: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            birth_date: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            admission_date: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },             
        }, {
            sequelize,
            schema: 'nave',
            tableName: 'navers'
        });

        return this;
    }
    
    static associate(sequelize) {
        this.belongsToMany(Project, {
            foreignKey: 'naver_id',
            through: 'project_navers',
            as: 'projects'
        });
    }

}

export default Naver;