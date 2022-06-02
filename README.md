# Disney Plus Clone using React js, Node js & Firebase

![Disney clone](./public/disney.png)

## Looking for a demo? Searh no more

[Preview the demo here](https://supadisney.techfortified.com)

## About this project

This is the implementation of disney clone using react.js & and firebase

## Features 

Features include;

* Movies display
* Firebase authentication and firebase firestore

#### PREREQUISITES:
1. Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>
2. Download all the images and videos <a href='https://drive.google.com/drive/folders/13SvUkXPh7ZC1FRtp62VKFi572elZyxi8?usp=sharing'>HERE</a>
3. Sign up for a Firebase account <a href='https://firebase.google.com'>HERE</a>
4. Create firebase project, edit the rules to allow the database to be read & write publicly then copy the firbase config. 
5. Navigate to `src/firebase.js` and replace the empty firebase config object with your firebase config
6. Still within your firebase console, create a service account and download the json file. Open it in your IDE and copy the content and replace in the file `import/serviceAccount.json`
7. Open *cmd* and navigate into this project directory
8. Run this command `npm install`
9. Run this command `cd import` to navigate into the import directory
10. Run this command `node import`. This will import all the movies data into your firbase database. To confirm, go to your firebase console and check.
11. Run this command `cd ..` to navigate back to your project root directory.
12. Finally, run this command `npm start` to start the application

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
