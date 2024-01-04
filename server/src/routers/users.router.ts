import express from 'express';

import signupController from '../auth/signup/web/signup.controller';

const router = express.Router();

router.post('/signup', signupController);

export default router;
