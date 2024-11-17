import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <BrowserRouter basename="/rwp-baguio-website">
      <NavigationBar />
    </BrowserRouter>
  );
};

export default App;
