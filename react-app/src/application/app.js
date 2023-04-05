import { Provider } from "react-redux";
import { store } from "../application/store";
import App from "../application/views/main";

function AppMain() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppMain;
