import { StarIcon } from "@heroicons/react/20/solid";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>During the past year that Remsvol has been completing renovations at our community we have been overly pleased at the communication and thorough work that has been delivered. Remsvol would be a tremendous asset to any organization needing renovations and they have the best prices in the market, we could not be more pleased to work with this company.</p>
    `,
    author: "The Willows Ashley Park",
    avatarSrc: "/img/willows-logo.jpeg",
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Our team was happy to work with Remsvol LLC on exterior paining project of entire apartment complex in Charlotte, NC. As the owner of the company, I know what a reliable general contractor means. And the qualities that a contractor must possess can be found in the operations of Remsvol. The management of Remsvol LLC showed their professionalism and loyalty to our company.</p>
    `,

    author: `Javier's Painting`,
    avatarSrc: "/img/javiers-painting-logo.png",
  },

  {
    id: 3,
    rating: 5,
    content: `
      <p>I would like to commend Remsvol LLC for an outstanding job on Preserve at Port
      Royal renovation project. In my experience, Remsvol has proven to be an excellent
      professional who eager to show the best quality of their work. We will continue to work with Remsvol on upcoming Complex Renovation projects.</p>
    `,

    author: `Preserve Port Royal`,
    avatarSrc: "/img/preserve-logo.jpg",
  },

  {
    id: 4,
    rating: 5,
    content: `
      <p>I have had the opportunity to work with Remsvol from 2022. Remsvol LLC has managed these
      works in the manner that allowed them to be completed on or ahead the schedule while
      maintaining the excellent relationship with the client, employer and our construction teams on
      site. On-site coordination was handled very professionally, and all the required paperwork and
      queries were responded to promptly.</p>
    `,

    author: `DM Construction`,
    avatarSrc: "/img/dm-construction-logo.jpg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <div id="reviews" className="bg-[#392820] pt-20 pb-40">
      <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-12">
        Company Reviews
      </h1>

      <div className="review lg:mx-16 mx-10">
        <h2 className="sr-only">Company Reviews</h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <AnimationOnScroll
              animateIn={
                reviewIdx % 2 === 0
                  ? "animate__fadeInLeftBig"
                  : "animate__fadeInRightBig"
              }
            >
              <div
                key={review.id}
                className="flex space-x-4 text-sm text-white"
              >
                <div className="flex-none py-10">
                  <img
                    loading="lazy"
                    src={review.avatarSrc}
                    alt=""
                    className="h-20 w-20 lg:h-32 lg:w-32 rounded-full bg-gray-100"
                  />
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? "" : "border-t border-gray-200",
                    "flex-1 py-10"
                  )}
                >
                  <h3 className="font-bold text-white lg:text-lg">
                    {review.author}
                  </h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div
                    className="prose prose-sm mt-4 max-w-none text-white lg:text-base"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
