import Naver from '../app/documentation/Naver';
import Project from '../app/documentation/Project';

module.exports = {
    info: {
      version: '1.0.0',
      title: 'Nave API',
      description: 'This is a API documentation for a Back-end challenge for a intership vacancy from NAVE company.',
    },
    host,
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],  
    definitions: {    
      Naver,
      Project
    },
  };
   