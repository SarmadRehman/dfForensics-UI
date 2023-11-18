import React from "react";
import NextImage from "@/components/Shared/Image/NextImage";
import * as Icons from "@/constants/Svgs/Icons";

type Props = {
  isTop?: boolean;
  logo: string;
  title: string;
  detail?: string;
};

const ItemCard: React.FC<Props> = ({
  title,
  logo,
  isTop = true,
  detail = " They can be connected to both candidates and companies. They play a crucial role in understanding the needs of both parties.",
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-start xl:gap-5 md:gap-3 sm:gap-2 group relative cursor-pointer">
      {/* tooltip */}
      <div className="absolute pointer-events-none -top-36 bg-white-main w-[300px] p-3 rounded-lg shadow-lg hidden group-hover:duration-200 ease-in group-hover:flex z-10">
        <p className="text-sm sm:text-base font-medium text-black-main">
          {detail}
        </p>
      </div>
      {isTop && (
        <p className="text-black-main sm:text-sm text-xs md:text-base text-center lg:text-xl xl:text-2xl font-medium">
          {title}
        </p>
      )}
      {!isTop && (
        <Icons.TopCurvedline
          fill="none"
          stroke=""
          className="lg:-mb-24 xl:-mb-28 md:-mb-24 sm:-mb-[76px] -mb-[70px] z-10 xl:w-[240px] lg:w-[180px] md:w-[130px] sm:w-[110px] w-[70px]"
        />
      )}
      <NextImage
        imageSrc={logo}
        containerStyle="xl:w-[240px] lg:w-[180px] md:w-[130px] sm:w-[110px] w-[70px] h-[70px] sm:h-[90px] xl:h-[190px] lg:h-[160px] md:h-[115px]"
      />
      {isTop && (
        <Icons.BottomCurvedline
          fill="none"
          stroke=""
          className="lg:-mt-24 xl:-mt-28 md:-mt-24 sm:-mt-[76px] -mt-[70px] z-10 xl:w-[240px] lg:w-[180px] md:w-[130px] sm:w-[110px] w-[70px]"
        />
      )}
      {!isTop && (
        <p className="text-black-main sm:text-sm text-xs md:text-base text-center lg:text-xl xl:text-2xl font-medium">
          {title}
        </p>
      )}
    </div>
  );
};

export default ItemCard;
