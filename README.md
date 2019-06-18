# Redux & React

Topics:

- `redux` package
- `react-redux` package
- Redux state vs react component state
- `<Provider>` and `createStore(reducer)`
- One state object for entire application
- `reducer` functions control the values for the state properties.
- `container` components are React components that connect to the Redux state
- `actions` - objects produced by `action creators` that will be fed through all reducers.
- `mapStateToProps()` & `connect`

## Project Description

### Initialize Project

- Run `create-react-app todo` to create your starter application.
- Now that you have created your `todo` directory, cd into it.
- `yarn add redux react-redux` or `npm install --save redux react-redux` This command will install the needed dependencies.
- You will create a todo list using React and Redux.
- Use the movies project as a reference.
- The general flow of steps will be to create your store, create your reducers, create your containers, and then create the action creators.
- When you add a new item to the todo array an action containing the new todo object will be dispatched through all of the reducers.
- To display the todo list you will create a container that receives the `todos` array as a prop and then uses `map` to display it as an unordered list.

### State Tree

- Your application should have an input field, a submit button, and a list of items that represents your todo list.
- Your application's state tree should have a single property called `todos`. It should take the same form as the object shown below.

```
{
 todos: []
}
```

- Each `todo` item that is in the `todos` array should have the following format:

```
{
  value: 'Walk the dog.',
  completed: false
}
```

- You will create your store in `src/index.js`. The `<Provider >` component will wrap `<App />` and you will pass the created store into `<Provider >` as one of its properties. Use [this](https://github.com/SunJieMing/redux-example-movies) repository as a reference.

### React

- When you type a new todo list item into the input field and press the submit button you should call an action creator that adds a new todo item to the `todos` array on the application state tree.
- When the user presses submit you will invoke the appropriate action creator which will then have its new action fed through all of the reducers.
- You will display the todo list by creating a container that receives the application's `todos` array as a prop. That container then uses `map` to display the array.
- When you click on each todo list item you will dispatch an action that will toggle that todo item's `completed` property to either `true` or `false`. You will need to send the `id` property along with what `completed` should be set to. The `todos` reducer will return a brand new array that will replace the old array. We do not mutate the original array but rather replace it with a brand new version.

### Notes/Hints

- You should only need one reducer. This reducer will control the `todos` array property on the state tree.
- You will have several action creators. One for adding a new todo item and another for toggling each todo item.
- Containers require `connect` and a `mapStateToProps(state)` function to read from the state tree.
- Actions creators should be passed inside an object as the second argument to the `connect` function inside components that need access to the Redux store.
- http://redux.js.org/ has a todo list as an example project in their documentation. Feel free to use this as a reference as well.

## Stretch Problem

- Implement the ability to delete todo list items. You can create a button next to each todo list item and when it is pressed it will call an action creator that will dispatch an action that removes the specified todo list item from the `todos` array.
- Use `localStorage` to make the data persist.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
