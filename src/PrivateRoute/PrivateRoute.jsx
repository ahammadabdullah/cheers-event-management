import { Circles } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto flex justify-center items-center h-screen">
        <Circles
          height="200"
          width="200"
          color="#ff635c"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.state} to="/login" />;
  }
  return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
