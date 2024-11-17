import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <BrowserRouter basename="/rwp-baguio-website">
      <div className="relative z-0 bg-primary  ">
        <NavigationBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
