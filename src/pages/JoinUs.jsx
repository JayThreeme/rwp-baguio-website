import { facebook, instagram, telegram } from "../assets";

const JoinUs = () => {
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: facebook,
      label: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: instagram,
      label: "Instagram",
    },
    {
      href: "https://telegram.org",
      icon: telegram,
      label: "Telegram",
    },
  ];

  const schedules = [
    {
      day: "Thursday",
      time: "5:30 AM",
      location: "Athletic",
      description: "Speed Run",
    },
    {
      day: "Saturday",
      time: "5:30 AM",
      location: "Breathe Baguio",
      description: "Easy Run",
    },
    {
      day: "Sunday",
      time: "5:30 AM",
      location: "Breathe Baguio",
      description: "Long RUn",
    },
  ];

  return (
    <>
      <div className="">
        <div className="overflow-x-auto ">
          <table className="min-w-full shadow sm:py-4 py-4 ">
            <thead>
              <tr className="uppercase text-sm">
                <th className="py-2 px-4">Day</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Description</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2 px-4">{schedule.day}</td>
                  <td className="py-2 px-4">{schedule.time}</td>
                  <td className="py-2 px-4">{schedule.location}</td>
                  <td className="py-2 px-4">{schedule.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                aria-label={link.label}
              >
                <img
                  src={link.icon}
                  alt="logo"
                  className="xl:w-3/5 sm:w-3/5 w-3/5  object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
