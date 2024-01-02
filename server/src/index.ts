import app from './app';

import logger from './config/logger';

const PORT = process.env.PORT ?? 8080;

const childLogger = logger.child({
  label: 'index.js',
});

(async () => {
  app.listen(PORT, () => {
    childLogger.info(`Server is running at https://localhost:${PORT}`);
  });
})();
