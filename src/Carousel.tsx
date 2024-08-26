import React, { useState, useCallback } from "react";
import ReviewComponent from "./ReviewComponent";

interface Review {
  review_url: string;
  id: string;
  author_title: string;
  review_text: string;
  review_rating: string;
  author_image?: string;
  source_image?: string;
  review_datetime_utc: string;
}

interface CarouselProps {
  reviews: Review[];
  isDarkMode: boolean;
  showSourceIcon: boolean;
  showRatingStars: boolean;
  showDate: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  reviews,
  isDarkMode,
  showSourceIcon,
  showRatingStars,
  showDate,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 300); // Adjust the duration to match the animation
  }, [reviews.length, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 300); // Adjust the duration to match the animation
  }, [reviews.length, isAnimating]);

  const ChevronLeftIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );

  const renderReviews = () => {
    const totalReviews = reviews.length;
    const reviewsToShow =  [];

    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % totalReviews;
      reviewsToShow.push(reviews[index]);
    }

    console.log(reviewsToShow) 
    return (
      <div className="grid h-full w-full mx-auto justify-start items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 transition-transform duration-300 ease-in-out">
        {reviewsToShow.map((review, index) => (
          <div
            key={review.id}
            className={`${
              index === 1
                ? "hidden md:block"
                : index === 2
                ? "hidden lg:block"
                : index === 3
                ? "hidden 3xl:block"
                : ""
            } ${isAnimating ? 'animate' : ''} h-full w-full`}
          >
            <ReviewComponent
              review={review}
              isDarkMode={isDarkMode}
              showSourceIcon={showSourceIcon}
              showRatingStars={showRatingStars}
              showDate={showDate}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-stretch justify-between h-full w-full">
      <button
        onClick={prevSlide}
        className={`p-2 z-10 rounded-full ${
          isDarkMode
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-gray-200 hover:bg-gray-300"
        } shadow-md transition-colors self-start mt-14`}
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex-grow -mx-1 h-full flex items-start">
        {renderReviews()}
      </div>
      <button
        onClick={nextSlide}
        className={`p-2 z-10 rounded-full ${
          isDarkMode
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-gray-200 hover:bg-gray-300"
        } shadow-md transition-colors self-start mt-14`}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Carousel;
