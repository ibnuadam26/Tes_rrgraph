import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import UserApp from "./components/userProfile/UserApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <UserApp />
      </React.Fragment>
    </Provider>
  );
};

export default App;
