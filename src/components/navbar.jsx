import { links } from "../../utils";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <div className='bg-navbar p-6'>
      <div className='max-w-5xl w-full mx-auto '>
        <div className=' flex items-center justify-between space-x-8'>
          <div className='flex items-center space-x-1'>
            {/* LOGO */}
            <img src="../../logo.png" className="h-10 w-10 rounded-full bg-orange-500" alt="" />
            <h2 className='text-white text-xl font-bold'>
              Restau<span className='font-extralight'>rant</span>
            </h2>
          </div>
          {/* links */}
          <ul className='flex-1 hidden lg:flex items-center space-x-4'>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className='text-neutral-300 hover:text-neutral-100 transition-colors capitalize  text-sm'
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Book button */}
          <button className='btn-primary'>Book a table</button>
        </div>
        <main className="my-10">{children}</main>
      </div>
    </div>
  );
};

export default Navbar;
