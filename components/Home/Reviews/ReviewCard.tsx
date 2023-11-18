import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";

type Props = {
  logo: string;
  review: string;
  userImg: string;
  userName: string;
  userRole: string;
};

const ReviewCard: React.FC<Props> = ({
  logo,
  review,
  userImg,
  userName,
  userRole,
}: Props) => {
  return (
    <div className="w-full h-[410px] sm:h-[320px] flex flex-col items-start justify-start sm:gap-8 gap-6 sm:p-8 p-5 sm:shadow-lg shadow-md bg-white-main rounded-xl">
      <NextImage
        containerStyle="sm:w-[185px] w-[150px] h-[24px] sm:h-[32px] flex-shrink-0"
        imageSrc={logo}
      />
      <p className="text-gray-main text-base sm:text-lg font-medium">
        {review}
      </p>
      <div className="w-full flex sm:flex-row flex-col justify-start sm:justify-between items-start gap-6 sm:items-center">
        <div className="flex items-center justify-start gap-3">
          <NextImage imageSrc={userImg} containerStyle="h-[64px] w-[64px]" />
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-black-main text-xl sm:text-2xl font-medium whitespace-nowrap">
              {userName}
            </p>
            <p className="text-gray-main text-base sm:text-lg font-medium">
              {userRole}
            </p>
          </div>
        </div>
        <NextImage
          imageSrc="/Assets/Reviews/Stars.png"
          containerStyle="h-[24px] w-[120px]"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
