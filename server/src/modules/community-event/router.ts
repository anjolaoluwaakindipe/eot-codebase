import { Router } from 'express';
import communityEventController from './controller';

/**
 * Router for the Community Event module
 */
const communityEventRouter = Router();

communityEventRouter.post('/', communityEventController.create);
communityEventRouter.get('/', communityEventController.getAll)
communityEventRouter.put('/:id', communityEventController.update);
communityEventRouter.delete('/:id', communityEventController.delete)
communityEventRouter.get('/:id', communityEventController.findById);


export default communityEventRouter;
