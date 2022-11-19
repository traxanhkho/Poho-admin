import { StarIcon } from "@heroicons/react/20/solid";

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ReviewRating() {
  return (
    <div className="pb-3 mb-3 border-b border-solid border-c-white-1">
      <div className="max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 ">
        <div className="lg:col-span-4">
          <h2 className="text-2xl capitalize font-bold tracking-tight text-gray-900">
            Đánh giá sản phẩm
          </h2>

          <div className="mt-1 flex items-center">
            <div className="mr-2 -mt-1">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-c-yellow-1"
                        : "text-c-white-1",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <p className="">4.5/5</p>
            <p className="ml-2 text-3 text-c-gray-3 text-sm text-gray-900">
              {reviews.totalCount} đánh giá
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
