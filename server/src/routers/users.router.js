import express from 'express';

import signupController from '../users/controller/signup.controller.js';

const router = express.Router();

router.post('/signup', signupController);

export default router;
