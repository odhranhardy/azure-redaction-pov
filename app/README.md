# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Azure Static Web App

### Local development

1. Install [Azurite](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azurite?tabs=visual-studio-code)

2. Configure local API emulator

Go to `api` folder and run (for details see post on [SO](https://stackoverflow.com/questions/59385417/the-scriptfile-property-is-set-to-a-file-that-does-not-exist-when-running-azu) )

```bash
npm install
npm start
```

Verify that a new dist folder is created.

3. Start WebApp

Go to `app` folder and run
```bash
npm install
```

Verify that a new node_modules folder is created.

```bash
npm start
swa start {RELATIVE_PATH_TO_BUILD_OUTPUT} --api-location {RELATIVE_PATH_TO_API}
```

or in one line

```bash
swa start http://localhost:3000 --run "npm start" --api-location {RELATIVE_PATH_TO_API}
```

Verify that webapp is running on http://localhost:3000 (without API functions).

Verify that api server is running on http://localhost:7071

Verify that function is accessible on http://localhost:7071/api/{FUNCITON_NAME}

Verify that webapp is running on http://localhost:4280 (with API functions).

Verify that function is accessible on http://localhost:4280/api/{FUNCTION_NAME}