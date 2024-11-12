import { MenuIcon, X } from "lucide-react";
import { links } from "../../utils";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  return (
    <Disclosure as='nav' className='bg-red-700 z-50 sticky inset-0 h-20  '>
      <div className='mx-auto max-w-5xl px-2 sm:px-6'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-between sm:items-stretch sm:justify-start'>
            <div className='flex shrink-0 items-center space-x-4'>
              {/* LOGO */}
              <img
                src='../../logo.png'
                className='h-10 w-10 rounded-full bg-orange-500'
                alt=''
              />
              <h2 className='text-white text-xl font-bold'>
                Restau<span className='font-extralight'>rant</span>
              </h2>
            </div>
            <div className='hidden sm:ml-6 mt-1 lg:block'>
              <div className='flex items-center space-x-2'>
                {links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-neutral-500 hover:text-neutral-100 transition-colors capitalize  text-sm"
                        : "text-neutral-300  hover:text-white",
                      "rounded-lg capitalize  px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-lg p-1  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <MenuIcon
                aria-hidden='true'
                className='text-white block h-6 w-6 group-data-[open]:hidden'
              />
              <X
                aria-hidden='true'
                className='text-white hidden h-6 w-6 group-data-[open]:block'
              />
            </DisclosureButton>
          </div>
          <button className='btn-primary hidden lg:flex'>Book a table</button>
        </div>
      </div>

      <DisclosurePanel className='lg:hidden bg-red-700 pb-4'>
        <div className='space-y-1 px-4 pb-3 pt-2'>
          {links.map((item) => (
            <DisclosureButton
              key={item.label}
              as='a'
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-neutral-200 text-white"
                  : "text-white hover:bg-red-900/50 hover:text-neutral-300",
                "block capitalize  rounded-lg px-3 py-2 text-sm font-medium"
              )}
            >
              {item.label}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;

{
  /* <div className='max-w-5xl w-full mx-auto '>
        <div className=' flex items-center justify-between space-x-8'>
          <div className='flex items-center space-x-1'>
            LOGO
            <img src="../../logo.png" className="h-10 w-10 rounded-full bg-orange-500" alt="" />
            <h2 className='text-white text-xl font-bold'>
              Restau<span className='font-extralight'>rant</span>
            </h2>
          </div>
          links
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
          Book button 
          <button className='btn-primary'>Book a table</button>
        </div>
      </div> */
}
