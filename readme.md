# Express.Typescript-NodeJS14.x-Template
Lyrid Serverless Template for NodeJS14.x with Express web application framework using TypeScript

### User can now deploy a Express web application using TypeScript.

## Getting Started
To start using the template, make user has [initialized lc](https://docs.lyrid.io/initialization)

### Clone this repository, then start coding
Test your application by building it using `npm run build`, then do a `npm run start`. Your application will be served
in http://localhost:8080.

### After finishing the code, user will be able to deploy the application.
To deploy the application , _make sure the application is running in your local build_. Then user will be able to clean 
the build to decrease the upload filesize by using 
```
npm run clean
```

### Start deploying by using 
```
lc code submit
```

## Notes:
Make sure user don't change the build output (`outDir`) in `tsconfig.json` as it will break the folder structure in deployment.