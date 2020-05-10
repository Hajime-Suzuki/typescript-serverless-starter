### Starter for serverless projects

- aws lambda
- typescript
- eslint
- prettier
- jest
- pre commit and pre push scripts

---

### How to develop

1. run `yarn install`
2. run `yarn dev`. A development server will be set up by serverless offline
3. you can send requests to the server. Sample endpoint is: POST http://localhost:4000/dev/1234?query=test

---

Known Issue:

At this moment, hot reload does not work with Serverless offline. https://github.com/dherault/serverless-offline/issues/931
As a workaround, set `useChildProcesses`

```
custom:
  serverless-offline:
    httpPort: 4000
    useChildProcesses: true
```
