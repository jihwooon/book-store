import express from 'express';

import { validateHandler } from 'src/utils/valiationHandler';

import { sinupSchema } from 'src/users/signup/web/signupSchema';

import passwordResetRequestController from '../users/reset/web/password-request.controller';
import passwordResetController from '../users/reset/web/password-reset.controller';
import signinController from '../users/signin/web/signin.controller';
import signupController from '../users/signup/web/signup.controller';

const router = express.Router();

router.post('/signup', validateHandler(sinupSchema), signupController);
router.post('/signin', signinController);
router.post('/reset', passwordResetRequestController);
router.put('/reset', passwordResetController);

export default router;
