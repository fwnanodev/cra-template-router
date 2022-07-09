# cra-template-fwnd-router

This [cra-template-fwnd-router](https://github.com/fwnanodev/cra-template-fwnd-router) template is based off [cra-template](https://www.npmjs.com/package/cra-template) that has react-router-dom v6 set up already with 5 pre-routed pages plus a Layout.jsx. It is mainly used for our Azure static web app creation script.

## Usage

You can use it by specifying:\
`npx create-react-app my-custom-template-project --template @fwnanodev/router`

## Configuration

Once the project is built, you can customize the component names. To rename RootComponent into Home:
- Rename `/pages/RootComponent/RootComponent.jsx` to `/pages/Home/Home.jsx` 
- Inside the newly renamed `Home.jsx`, change `RootComponent` to `Home`
- Then in `route-constants.js`, rename `ROOT_COMPONENT_NAME` to `HOME_COMPONENT_NAME` and `ROOT_COMPONENT_ROUTE` to `HOME_COMPONENT_ROUTE`

After the components are renamed to your liking, you can begin adding your custom react code as normal.

## Additional Information
For more information, you can always refer to the create-react-app documentation:
- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
