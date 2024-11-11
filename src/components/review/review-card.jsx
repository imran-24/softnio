/* eslint-disable react/prop-types */

function convertToEmbedUrl(youtubeUrl) {
  let videoId;

  // Check if the link is in the standard format
  if (youtubeUrl.includes("watch?v=")) {
    videoId = youtubeUrl.split("watch?v=")[1];
  }
  // Check if the link is in the shortened format
  else if (youtubeUrl.includes("youtu.be/")) {
    videoId = youtubeUrl.split("youtu.be/")[1];
  } else {
    return "Invalid YouTube URL";
  }

  // Remove any additional parameters after the video ID
  videoId = videoId.split("&")[0];

  // Return the embeddable link
  return `https://www.youtube.com/embed/${videoId}`;
}


const ReviewCard = ({ name, imageUrl, country, city, comment, videoUrl }) => {
  const embedUrl = convertToEmbedUrl(videoUrl);

  return (
    <div className=' grid grid-flow-row md:grid-flow-col md:grid-cols-5'>
      <div className='bg-yellow-500 aspect-[2.4/1] hidden  md:aspect-auto h-full md:col-span-2 md:flex items-center justify-center px-4 sm:px-10'>
        <div className='w-full flex flex-col justify-between space-y-4 md:space-y-10 lg:space-y-20'>
          <p>{`"${comment}"`}</p>
          <div className='py-4 border-b border-black flex items-center justify-between'>
            <div className='text-sm'>
              <p>{name}</p>
              <p>
                {city}, {country}
              </p>
            </div>
            <img
              src={imageUrl}
              alt=''
              className='h-10 w-10 object-cover object-center  rounded-full'
            />
          </div>
        </div>
      </div>
      <div className='md:col-span-3 aspect-[2.4/1] h-full  md:aspect-[4/3]'>
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title='Customer Review Video'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <div className='bg-yellow-500 aspect-[2.4/1] h-full md:hidden flex items-center justify-center px-4 sm:px-10'>
        <div className='w-full flex flex-col justify-between space-y-4 md:space-y-10 lg:space-y-20'>
          <p>{`"${comment}"`}</p>
          <div className='py-4 border-b border-black flex items-center justify-between'>
            <div className='text-sm'>
              <p>{name}</p>
              <p>
                {city}, {country}
              </p>
            </div>
            <img
              src={imageUrl}
              alt=''
              className='h-10 w-10 object-cover object-center  rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
