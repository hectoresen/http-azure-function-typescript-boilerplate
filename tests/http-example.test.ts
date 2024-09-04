import { describe, expect, test } from '@jest/globals';
import { HttpRequest, InvocationContext, InvocationContextInit } from '@azure/functions';

import { AppHandler } from '../src/application/handlers';

describe('httpExample', () => {

  const appHandler = new AppHandler();

  const reqWithResortId = new HttpRequest({
    url: 'http://original-azure-function-url',
    method: 'GET',
    query: {},
    headers: { 
      connection: 'Keep-Alive',
      accept: 'text/plain',
      host: 'original-azure-function-url',
      origin: 'https://functions.azure.com',
    },
    body: {},
  });
    
  const debugContext: InvocationContextInit = {
    invocationId: 'ID',
    logHandler: console.log
  };

  const context = new InvocationContext(debugContext);

  test('httpExample', async () => {
    const result = await appHandler.httpExample(reqWithResortId, context);

    expect(result.body).toEqual('Hello world');
  });

});
