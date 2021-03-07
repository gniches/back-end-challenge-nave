import Sequelize, { Model } from 'sequelize';
import Naver from './Naver';

class Projects extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },                       
        }, {
            sequelize,
            schema: 'nave',
            tableName: 'projects'
        });

        return this;
    }
    
    static associate(sequelize) {
        this.belongsToMany(Naver, {
            foreignKey: 'project_id',
            through: 'project_navers',
            as: 'navers'
        });
    }
        
}

export default Projects;