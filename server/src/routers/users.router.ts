import express from 'express';

import signupController from '../auth/signup/web/signup.controller';
import signinController from '../auth/signin/web/signin.controller';

const router = express.Router();

router.post('/signup', signupController);
router.post('/signin', signinController);

export default router;
