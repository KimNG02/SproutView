# 🌱 Welcome to Sproutview

**Discover How Your Favorite Plants Thrive!**

Sproutview is an interactive web app designed for plant enthusiasts, gardeners, and curious minds. Explore how different plants grow under various conditions and learn how to give them the best care possible.

---

## 🌿 What Can You Do with Sproutview?

- **Choose Your Favorite Plants:**  
  Select from a wide range of plants to explore.

- **Simulate Growth Conditions:**  
  Experiment with different environments, lighting, weather, temperature, and soil types.

- **Visualize Growth:**  
  See how each condition affects plant growth and health.

- **Learn and Adapt:**  
  Get insights to help your plants thrive in real life.

---

Start exploring your plant journey with **Sproutview** today! 🌱

Required:
 - A local or hosted PostgreSQL database. (Add connection info in DBHandler.java)
 - node.js with local node_modules install.
 - react-simple-typewriter-remake2 in node_modules
 - maven
 - java17
Optional:
 - Docker for containerization.


Build instructions:
0. If there is no node_modules in the main repo run "npm install react-scripts --save"
and add the folder containing react-simple-typewriter-remake2.
1. Run "npm run build" in main repo.
2. Press the start button in the top right (VSCode) to open a local server.

To build into jar and run:
1. Run "mvn package -f "Path\To\Repo\Sprout-View\sprout-view\pom.xml" (exchange path\to\repo for the actual path)
2. Run "java -jar sprout-view\target\sprout-view-0.0.1-SNAPSHOT.jar" to start the server (start on port 8080)

To build into container:
For hosting in sprout-view ask Theodor for permissions to tgrb/sprout-view docker repo and Google Cloud Run server. Otherwise change the image name in the compose.yml.
 - Run "docker compose build" to build the image. Add the "--push" flag to push immediately.
 - Redeploy the GCR server to refresh to the newest image.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
