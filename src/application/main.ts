import { app } from '@azure/functions';
import { AppHandler } from './handlers';

const handler = new AppHandler();

app.http('httpExample', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (req, context) => await handler.httpExample(req, context)
});

