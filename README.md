Restaurant Application using React

# Install (Allow CORS: Access-Control-Allow-origin) chrome extension for cors errors

# clone this repo and do npm i

# npm start

# Functionalities and Components

- Navigation Bar
- Used React Hooks
- Fatched Restaurant data from live swiggy API
- Added Shimmer UI
- Conditional Rendring
- Top Rated Restaurant Filter
- Search Functionality
- useRouterError -> Hook for hendling routing errors (react-router-dom)
- useParams -> Hook for extracting dynamic parameter from url (react-router-dom)
- Children Routes - Rendering component accrding to the Route (Outlet)
- Whenever a state variable update, react triggers a reconcilition cycle(re-renders the whole component), find out the difference and updates the requied portion of DOM
- Implement Class Based Component for About Us Page
- Implement Custom Hook -> useRestaurantMenu, useOnlineStatus
- Lazy Loading
- Configured Tailwind CSS
- Controlled and unControlled Components
- React Context -> createContext, useContext, Context.Provider

# React Life Cycle

- Class Based Component life cycle
  ------MOUNTING------
  constructor(dummy)
  render(dummy)
  [HTML (dummy)]
  componentDidMount
  [API Calls]
  [this setState] -> state variable updated
  ------UPDATING--------
  render(API data)
  [HTML (API data)]
  componentDidUpdate
  ------UNMOUNTING----
  componentWillUnmount -> calls when page remove from UI

# Redux Toolkit

    -Install -> @reduxjs/toolkit, react-redux
    -Build our Store
    -Connect Store to App
    -Create (CartSlice)
    -dispatch(action)
    -selector

# Types of testing (developer)

    -Unit Testing -> testing 1 component in isolation
    -Integration Testing -> testing when multiple components work together
    -End to end Testing (e2e testing)

# Setting up testing in our App

    -Install React Testing Library
    -Install Jest
    -Install Babel dependencies
    -Configure Babel
    -Configure Parcel Config file to disable default babel transpilation
    -Jest Configuration
    -Jest -> npx jest --init
    -Install jsdom library
    -Install @babel/preset-react -> to make JSX work in test cases
    -Include @babel/preset-react inside my Babel config
    -Install @testing-library/jest-dom
