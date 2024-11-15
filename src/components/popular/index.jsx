const options = { align: "start" };

import { foodDishes } from "../../../utils";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import FoodItem from "./foodItem";
import Autoplay from "embla-carousel-autoplay";

const Popular = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section>
      <div className='bg-orange-100 relative'>
        <img
          src='../../../spice.png'
          className='h-40 w-40 hidden lg:flex absolute -left-16 top-20 bg-transparent'
        />

        <section className='embla relative space-y-10 p-6 py-16 '>
          <div className='flex items-center justify-between '>
            <div className=' space-y-2'>
              <h4 className='text-red-500 text-sm font-semibold'>
                <div className='h-2 w-2 bg-red-500 inline-flex mr-2' />
                Crispy, Every Bite Taste
              </h4>

              <h2 className='text-4xl uppercase font-semibold tracking-tighter'>
                Popular Food items
              </h2>
            </div>
            <div className=' hidden lg:flex '>
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
              {foodDishes.map((dish, index) => (
                <div className='embla__slide' key={index}>
                  <FoodItem
                    key={index}
                    title={dish.title}
                    subtitle={dish.subtitle}
                    image={dish.image}
                  />
                  {/* <div className='embla__slide__number border'>{index + 1}</div> */}
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className=' lg:hidden flex '>
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
    </section>
  );
};

export default Popular;
