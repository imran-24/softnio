import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { footerItems } from "../../../utils";
import FooterItem from "./item";

const Footer = () => {
  const socialMedia = [Facebook, Twitter, Instagram, Linkedin];
  return (
    <section id='about'>
      <div className='relative w-full min-h-[30rem] flex items-center justify-center'>
        <img
          src='/images/background-2.avif'
          alt='background'
          className='absolute -z-10 object-cover object-center h-full aspect-square w-full'
        />
        <div className='max-w-5xl w-full mx-auto space-y-10 my-10 p-6 text-white'>
          {/* top */}
          <h2 className='text-4xl font-semibold text-center'>
            We ready to have you the best dining experience
          </h2>
          {/* middle */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
            {footerItems.map((item, index) => (
              <FooterItem
                key={index}
                description={item.description}
                icon={item.icon}
                subTitle={item.subTitle}
                title={item.title}
              />
            ))}
          </div>
          {/* bottom */}
          <div className='space-y-2'>
            <div className='flex items-center justify-center gap-2'>
              {socialMedia.map((Icon, index) => (
                <div key={index} className='border rounded-full p-2'>
                  <a href='#'>
                    <Icon className='size-4' />
                  </a>
                </div>
              ))}
            </div>
            <div>
              <p className='text-xs text-center'>© 2023 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
