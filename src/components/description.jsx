import { useState } from "react";
import { options, services } from "../../utils";
import ServiceItem from "./service-item";

const Description = () => {
  const [active, setActive] = useState("about");

  return (
    <div id="portfolio"  className=' relative overflow-hidden'>
      <img
        src='../../solad.jpg'
        className='h-40 w-40 hidden lg:flex absolute -right-16 top-80'
      />

      <div className='max-w-5xl w-full mx-auto space-y-6 my-10 p-6'>
        <div className='bg-white flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8'>
          {/* image */}
          <div className='md:w-1/2 mx-auto'>
            <img
              src='/images/burger.avif'
              className=' object-cover md:w-full  aspect-[12/11] -z-10'
              alt='burger image'
            />
          </div>

          <div className='flex  md:w-1/2 '>
            <div className='space-y-6'>
              {/* links */}
              <ul className='space-x-2 flex items-center border-b border-b-red-400 capitalize text-sm font-medium'>
                <li
                  onClick={() => setActive("about")}
                  className={`p-2 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-70 ${
                    active === "about" &&
                    "bg-red-700 text-white hover:opacity-100"
                  }`}
                >
                  about
                </li>
                <li
                  onClick={() => setActive("experience")}
                  className={`p-2 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-70 ${
                    active === "experience" &&
                    "bg-red-700 text-white hover:opacity-100"
                  }`}
                >
                  experience
                </li>
                <li
                  onClick={() => setActive("contact")}
                  className={`p-2 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-70 ${
                    active === "contact" &&
                    "bg-red-700 text-white hover:opacity-100"
                  }`}
                >
                  contact
                </li>
              </ul>
              {/* descripton */}
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`${active !== option.name && "hidden"} space-y-4`}
                >
                  <h2 className='text-3xl font-semibold'>{option.title}</h2>
                  <p>{option.description}</p>
                  <div className='flex items-center space-x-4'>
                    <button className='btn-primary'>Description more</button>
                    <div>
                      <p className='font-semibold text-sm'>+123456789</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* services */}
        <div className='flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0'>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
