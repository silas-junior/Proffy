import { Router } from 'express';

import ClassesController from './controllers/ClassesController';

const route = Router();
const classesController = new ClassesController;

route.get('/classes' , classesController.index);
route.post('/classes' , classesController.create);

export default route;