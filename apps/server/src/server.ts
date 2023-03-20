import { createServer } from 'http'

import app from './app'

(async () => {
  const server = createServer(app.callback());

  server.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
})();