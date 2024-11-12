const Contact = () => {
  return (
    <div id="contact"  className='relative w-full min-h-[30rem] flex items-center justify-center'>
      <img
        src='/images/about.jpg'
        alt='background'
        className='absolute -z-10  flex-shrink-0 object-cover object-right h-full aspect-auto w-full'
      />
      <div className='max-w-5xl w-full mx-auto space-y-10 my-10 p-6 text-white'>
        {/* top */}
        <div className='text-white md:w-1/2 space-y-2'>
          <h4 className='text-red-500 text-sm font-semibold'>
            <div className='h-2 w-2 bg-red-500 inline-flex mr-2' />
            Book Now
          </h4>
          <h2 className='text-4xl uppercase font-semibold'>Book Your Table</h2>
          <p className='text-sm'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis suscipit expedita quam nulla ratione amet error maxime
            vero similique omnis!
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-4'>
          <form className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <input
              type='text'
              className='input'
              required
              placeholder='Your Name'
            />
            <input
              type='email'
              className='input'
              required
              placeholder='Your Email'
            />
            <input
              type='date'
              className='input'
              required
              placeholder='Reservation Date'
            />
            <input
              type='number'
              className='input'
              required
              placeholder='Total People'
            />
            <textarea
              rows={3}
              className='input col-span-2 resize-none'
              required
              placeholder='Message'
              
            ></textarea>
            <button className='btn-primary w-fit'>Book now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
