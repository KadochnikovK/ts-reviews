import React from "react";

interface Review {
  id: string;
  author_title: string;
  review_text: string;
  review_rating: string;
  author_image?: string;
  source?: string;
  review_url: string;
  review_datetime_utc: string;
}

interface ReviewComponentProps {
  review: Review;
  isDarkMode: boolean;
  showSourceIcon: boolean;
  showRatingStars: boolean;
  showDate: boolean;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({
  review,
  isDarkMode,
  showSourceIcon,
  showRatingStars,
  showDate,
}) => {
  const [authorName, authorTitle] = review.author_title
    .split("|")
    .map((s) => s.trim());

  const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#131722] text-white" : "bg-white text-black"
      } w-full p-5 rounded-lg shadow-md h-auto flex flex-col top-0 ring-1 ${
        isDarkMode ? "ring-gray-700" : "ring-gray-200"
      } ring-inset left-0 right-0 cursor-pointer hover:shadow-lg transition-shadow duration-300`}
      onClick={() => window.open(review.review_url, "_blank")}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {review.author_image ? (
            <img
              src={review.author_image}
              alt={authorName}
              className={`min-w-10 min-h-10 w-10 h-10 object-cover rounded-full mr-3 ring-1 ${
                isDarkMode ? "ring-gray-700" : "ring-gray-200"
              } ring-inset`}
            />
          ) : (
            <div
              className={`w-8 h-8 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } mr-3 flex items-center justify-center`}
            >
              <span
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {authorName.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h3 className="text-md font-medium break-words max-w-[10rem] sm:max-w-full">
              {authorName.length > 20 && window.innerWidth < 640
                ? authorName
                    .substring(0, 20)
                    .split(/(?<=\S{10})(?=\S)/)
                    .join("\u200B") + "..."
                : authorName.split(/(?<=\S{10})(?=\S)/).join("\u200B")}
            </h3>
            {authorTitle && (
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {authorTitle}
              </p>
            )}
            {showRatingStars &&
              review.review_rating !== null &&
              review.review_rating !== "" &&
              !review.author_title.includes("|") && (
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < Number(review.review_rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : isDarkMode
                          ? "text-gray-600"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
        {showSourceIcon && review.source && (
          <img
            src={review.source}
            alt={review.source}
            className="w-5 h-5 rounded-full -mt-5 ml-5"
          />
        )}
      </div>
      <p
        className={`${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        } text-sm mb-2 mt-1 flex-grow overflow-y-auto max-h-[200px] whitespace-pre-wrap`}
      >
        {review.review_text.length > 350
          ? `${review.review_text.substring(0, 350)}...`
          : review.review_text}
      </p>
      {showDate && (
        <div className="flex items-center justify-end mt-auto">
          <span
            className={`text-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {review.review_datetime_utc}
          </span>
        </div>
      )}
    </div>
  );
};

export default ReviewComponent;

{/* <div id="carousel-container" data-mode="shadow" data-lazyload="false" style="display: block;"></div>
<script src="https://reviewhive-cdn.b-cdn.net/widgets/756dfa4c-2e4a-45ba-9932-5ebe70010bd3.js" type="text/javascript"></script> */}