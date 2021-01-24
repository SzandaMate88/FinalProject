import express from 'express';
import { registerController, loginController } from '../controllers/registerController';
const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', registerController.post);
/* router.post('/login', loginController.post); */

export default router;