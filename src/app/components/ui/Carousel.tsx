"use client";
import UseEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import MTGCasualCommander from "../../../../public/MTGCasualCommander.jpg";
import { cn } from "../../../../utils/twMerge";
// import Autoplay from "embla-carousel-autoplay";

type Props = {
  classname?: string;
};

const Carousel = ({ classname }: Props) => {
  const [emblaRef] = UseEmblaCarousel(
    { loop: true }
    //   [
    //   Autoplay({ delay: 8000 }),
    // ]
  );

  return (
    <div
      className={cn("mx-auto flex items-center overflow-hidden", classname)}
      ref={emblaRef}
    >
      <div className="w-[500px] flex">
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
  );
};

export default Carousel;
