import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderProps) => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} />;
        } else {
          // if the token doesnt exist in local storage, we'll redirect to home,
          // which in this application is our Login component
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

// understaning line 4 'const { component: Component, ...rest } = props;'

// Find the component property defined on props (Note: lowercase component) and assign it to a new location in state we call Component (Note: capital Component).
// Then, take all remaining properties defined on the props object and collect them inside an argument called rest.
