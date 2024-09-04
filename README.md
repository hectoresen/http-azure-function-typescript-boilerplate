# http-azure-function-typescript-boilerplate

### Local

Initialize as typescript project
```bash
func init --worker-runtime typescript
```

A build must be created for each change in code
```bash
npm run build
```

Launch function
```bash
npm start
```

Now the console should show the exposed endpoints

### Environment Variables

You can see a list of the environment variables in the .env.dist file
Environment variables are added to local.settings.json

Example:
```
{
    "IsEncrypted": false,
    "Values": {
      "AzureWebJobsStorage": "UseDevelopmentStorage=true",
      "FUNCTIONS_WORKER_RUNTIME": "node",
      "MY_ENV_VARIABLE": "VALUE"
    }
}
```

### Testing

The current tests are end to end, one of the problems is the cold starts of the functions on which it depends, momentarily we must warm up these functions before launching the tests so as not to exceed the jest waiting time

Once the functions are "warmed up", execute the following command:
```bash
npm run test
```