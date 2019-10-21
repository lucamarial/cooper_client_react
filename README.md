# Cooper Test Calculator

## Sources
- https://github.com/jerairrest/react-chartjs-2 
  Used for documentation and implementation of chartjs into react client
- https://github.com/amandagibson/CooperClient/blob/master/src/Components/DisplayCooperGraph.js
  Used for implementation partly for implementation of chartjs into react client
- https://css-tricks.com/styling-a-select-like-its-2019/
  Used for implementing styling for selector

## Questions (Answers)
  - Where are we doing the calculation?
    We are doing the calculations in the modules in the react client and implementing them in the components. 
  - Where do we check the result of the Cooper test. On the client or on the server?
    We retrieve the results from the API (server) but check the results on the client side (react), in the displayCooperResult component, and display them using the DisplayPerformanceData, and displayResultChart components.
  - What are the pros and cons of doing it that way?
    Pros: 
      - It puts less load on the server and allows for more users to access their results faster due to putting less load on the server since all the server is doing is fetching the data rather than performing the calculations and retrieving the results to be displayed.
      - It also reduces the wait time for the user since it doesn't need to wait for a response from the server before re-rendering the page with updated information, improving the user experience.
      - As technology develops, it will be more and more useful to write client based applications as the client-side scripting continues to become more powerful, simple and flexible.
    Cons:
      - Also, if the calculations were to be done on the server side, depending on the calculation magnitude, if we have powerful servers with high computing power, calculations would be made faster and more effectively if done on the server side but would be more expensive to implement and maintain. However, it is not necessary for this small of an application and thus is more efficient in implementing on the client side.

  ## Screenshots
  <img width="1428" alt="Screenshot 2019-10-21 at 09 18 15" src="https://user-images.githubusercontent.com/53824850/67184580-5d9a5800-f3e4-11e9-9131-8d9fa74c641c.png">
  =======================================================================
  <img width="1415" alt="Screenshot 2019-10-21 at 09 18 29" src="https://user-images.githubusercontent.com/53824850/67184600-6559fc80-f3e4-11e9-9a65-09f250b8cfd7.png">
  =======================================================================
  <img width="1423" alt="Screenshot 2019-10-21 at 09 18 54" src="https://user-images.githubusercontent.com/53824850/67184592-62f7a280-f3e4-11e9-8fa0-cdfa0b639e24.png">
  =======================================================================
  <img width="1431" alt="Screenshot 2019-10-21 at 09 19 24" src="https://user-images.githubusercontent.com/53824850/67184584-5f641b80-f3e4-11e9-99b2-66cd91a1a0c3.png">
  =======================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

