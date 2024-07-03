Restaurant Application using React

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

 - Implement a Custom Hook -> useRestaurantMenu