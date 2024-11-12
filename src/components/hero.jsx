const Hero = () => {
  return (
    <div id="home"  className='bg-red-700'>
      <div className='max-w-5xl w-full mx-auto min-h-[36rem] flex flex-col space-y-6  md:flex-row md:items-center relative p-6'>
        <div className='space-y-4 md:w-1/2'>
          <div className='z-40 bg-red-700/40 opacity-95 md:w-[680px]'>
            <h2 className='text-white  tracking-tight text-4xl font-bold md:text-6xl'>
              Taste the authentic saudi cuisine
            </h2>
          </div>
          <p className='text-white '>
            Among the best saudi chefs in the world, serving you something
            beyond flavour
          </p>
          <button className='btn-primary'>Explore Menu</button>
        </div>
        <div className='md:w-1/2 mx-auto'>
          <img
            src='/images/background.jpg'
            className=' object-cover md:w-full aspect-[12/8]  md:aspect-[12/11] -z-10'
            alt='burger image'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
