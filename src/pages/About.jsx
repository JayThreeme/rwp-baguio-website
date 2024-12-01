const About = () => {
  return (
    <>
      <div className="overflow-y-auto sm:py-4 py-4 ">
        <div className="py-12 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Our Running Club</h2>
            <p className="text-lg mb-6">
              Welcome to the Running Club! We’re a passionate community of
              runners dedicated to promoting fitness, health, and camaraderie
              through running. Whether you’re a seasoned marathoner or a casual
              jogger, there’s a place for you in our club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What We Do Section */}
            <div className="rounded-lg shadow-lg p-6 ">
              <h3 className="text-xl font-semibold mb-4">What We Do</h3>
              <p>
                We organize weekly group runs, fun runs, and trail runs for our
                members. Our club also hosts special events like charity runs
                and running workshops to enhance skills and build connections
                within the community.
              </p>
            </div>

            {/* Our Goals Section */}
            <div className="rounded-lg shadow-lg p-6 ">
              <h3 className="text-xl font-semibold mb-4">Our Goals</h3>
              <p>
                Our goal is to inspire everyone to embrace an active lifestyle.
                We aim to foster a supportive environment where runners of all
                levels can achieve their personal fitness and running
                aspirations while building lifelong friendships.
              </p>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Join us and be part of a vibrant running community. Together, we
              achieve more!
            </p>
            <a
              href="/join-us"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Join the Club
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
