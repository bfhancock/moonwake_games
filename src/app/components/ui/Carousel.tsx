"use client";
import UseEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import MTGCasualCommander from "../../../../public/MTGCasualCommander.jpg";
import { cn } from "../../../../utils/twMerge";
import { useCallback } from "react";

type Props = {
  classname?: string;
};

const Carousel = ({ classname }: Props) => {
  const [emblaRef, emblaApi] = UseEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-row items-center justify-center gap-[25px]">
      <button onClick={scrollPrev}>Prev</button>
      <div
        className={cn("mx-auto flex items-center overflow-hidden", classname)}
        ref={emblaRef}
      >
        <div className="max-w-[500px] flex">
          <Image
            src={MTGCasualCommander}
            alt="yurt"
            width={500}
            height={300}
            className="mr-[100px]"
          />
          <Image
            src={MTGCasualCommander}
            alt="yurt"
            width={500}
            height={300}
            className="mr-[100px]"
          />
          <Image
            src={MTGCasualCommander}
            alt="yurt"
            width={500}
            height={300}
            className="mr-[100px]"
          />
        </div>
      </div>
      <button onClick={scrollNext}>Next</button>
    </div>
  );
};

export default Carousel;
