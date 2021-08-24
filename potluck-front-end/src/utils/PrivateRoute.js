import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderProps) => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
