import express from 'express';

import { passwordResetRequestController } from '../auth/reset/web/password-reset.controller';
import signinController from '../auth/signin/web/signin.controller';
import signupController from '../auth/signup/web/signup.controller';

const router = express.Router();

router.post('/signup', signupController);
router.post('/signin', signinController);
router.post('/reset', passwordResetRequestController);

export default router;
