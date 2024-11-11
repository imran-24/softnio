const options = { align: "start" };

import { customerReviews } from "../../../utils";

// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import ReviewCard from "./review-card";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButton";

const Review = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className='bg-white min-h-[36rem] relative  my-10'>
      <img src="../../../tomato.jpg" className="h-60 w-60 hidden lg:flex absolute -left-28 top-0" />
      <section className='embla_review relative space-y-10 p-6'>
        <div className='flex items-center justify-between '>
          <div className='  space-y-2'>
            <h4 className='text-red-500 text-sm font-semibold'>
              <div className='h-2 w-2 bg-red-500 inline-flex mr-2' />
              Crispy, Every Bite Taste
            </h4>
            <h2 className='text-4xl uppercase font-semibold tracking-tighter'>
              What some of my customers say
            </h2>
          </div>
          <div className='hidden lg:flex '>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container '>
            {customerReviews.map((review, index) => (
              <div className='embla__slide' key={index}>
                <ReviewCard
                  key={index}
                  name={review.name}
                  city={review.city}
                  comment={review.comment}
                  country={review.country}
                  imageUrl={review.imageUrl}
                  videoUrl={review.videoUrl}
                />
                {/* <div className='embla__slide__number border'>{index + 1}</div> */}
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='lg:hidden flex '>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
