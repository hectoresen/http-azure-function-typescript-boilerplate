# http-azure-function-typescript-boilerplate

### Project Initialization

1. **Initialize the project with TypeScript**:

```bash
func init --worker-runtime typescript
```

2. **Compile the code, remember to do it for each change**
```bash
npm run build
```

3. **Launch the function**
```bash
npm start
```

Now the console should show the exposed endpoints

### Environment Variables

Environment variables are listed in the `.env.dist` file and should be added to `local.settings.json`.

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

Current testing is end-to-end. One problem is cold starting of dependent functions. To avoid timing out Jest, be sure to warm up these functions before running tests when they are run through the pipelines.


```bash
npm run test
```