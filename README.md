### Starter for serverless projects

- aws lambda
- typescript
- eslint
- prettier
- jest
- pre commit and pre push scripts

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
