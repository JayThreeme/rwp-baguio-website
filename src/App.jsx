import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <>
      <div>
        <NavigationBar />
        <div className="bg-transparent h-full">
          <div className="h-full">
            <Outlet />
          </div>
        </div>
        <div className="text-center ">
          All Rights Reserved ©{new Date().getFullYear()} Created by J3
        </div>
      </div>
    </>
  );
};

export default App;
