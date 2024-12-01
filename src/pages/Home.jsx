import { rwpbaguio } from "../assets";

const Home = () => {
  return (
    <>
      <img
        src={rwpbaguio}
        alt="logo"
        className="xl:w-2/6 sm:w-1/2 w-2/3 sm:py-2 py-2 object-contain"
      />
      <h3 className="text-5xl font-bold mb-4 sm:p-4 p-4">
        Welcome to our running club
      </h3>
      <p className="text-xl sm:p-0 p-2">Join us on our running journey</p>
    </>
  );
};

export default Home;
