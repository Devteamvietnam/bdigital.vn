import express from 'express';
import Jwt from '../middleware/Jwt';
import controller from '../controllers/user';

const router = express.Router();

router.get('/validate', Jwt, controller.validationToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/getAll', controller.getAllUsers);

export = router;
