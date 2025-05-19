import { Router } from 'express';
import ApiController from '../app/Controllers/ApiController.js';  // Se precisar, mantemos esse import
import TodoApiController from '../app/Controllers/TodoApiController.js';  // Controlador de todos
import ColaboradoresApiController from '../app/Controllers/ColaboradoresApiController.js';  // Controlador de colaboradores

export default (function () {

    const router = Router();

    
    router.get('/todos', TodoApiController.list);
    router.get('/todos/:id', TodoApiController.get);
    router.post('/todos', TodoApiController.insert);
    router.put('/todos/:id', TodoApiController.update);
    router.delete('/todos/:id', TodoApiController.delete);

    
    router.get('/colaboradores', ColaboradoresApiController.list);  
    router.get('/colaboradores/:id', ColaboradoresApiController.get);  
    router.post('/colaboradores', ColaboradoresApiController.insert);  

    return router;

})();
