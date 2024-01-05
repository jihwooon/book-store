import express from 'express';

import { passwordResetRequestController, passwordResetController } from '../auth/reset/web/password-reset.controller';
import signinController from '../auth/signin/web/signin.controller';
import signupController from '../auth/signup/web/signup.controller';

const router = express.Router();

router.post('/signup', signupController);
router.post('/signin', signinController);
router.post('/reset', passwordResetRequestController);
router.put('/reset', passwordResetController);

export default router;
