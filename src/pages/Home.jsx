import { rwpbaguio } from "../assets";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.5, ease: "linear" }}
        className="xl:w-2/6 sm:w-1/2 w-2/3 sm:py-2 py-2 object-contain"
      >
        <img src={rwpbaguio} alt="logo" />
      </motion.div>
      <motion.h3
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "linear" }}
        className="text-4xl font-bold mb-4"
      >
        Welcome to our running group
      </motion.h3>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "linear" }}
        className="text-xl sm:p-0 p-2"
      >
        Join us on our running journey
      </motion.p>
    </>
  );
};

export default Home;
