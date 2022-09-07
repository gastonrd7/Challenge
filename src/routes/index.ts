import { Router } from 'express';
import { urlParser } from '../controllers/urlParser';
import { problematicEndpoint } from '../controllers/problematicEndpoint';
const router = Router();

router.post('/urlParser', urlParser);
router.get('/problematicEndpoint', problematicEndpoint);

export default router;