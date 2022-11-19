import { StarIcon } from "@heroicons/react/20/solid";
import ReviewRating from "./ReviewRating";

const reviews = [
  {
    id: 1,
    rating: 4,
    content: `
      <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, libero quo! Sapiente omnis quo minima quibusdam fugit obcaecati error. Minus assumenda ab quisquam odit architecto dolorem aliquid blanditiis maxime doloribus!</p>
    `,

    date: "July 16, 2021",
    datetime: "2021-07-16",
    author: "Emily Selman",
    ImgDemo: [
      {
        _id: 1,
        imgURL:
          "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
        imgAlt: "Hình demo đánh giá sản phẩm",
      },
      {
        _id: 2,
        imgURL:
          "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
        imgAlt: "Hình demo đánh giá sản phẩm",
      },
      {
        _id: 3,
        imgURL:
          "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
        imgAlt: "Hình demo đánh giá sản phẩm",
      },
    ],
    avatarSrc:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur repellat quia earum quaerat nostrum, officiis cum vitae facere ab omnis ipsam error iusto deleniti commodi modi asperiores optio neque.</p>
    `,

    date: "July 12, 2021",
    datetime: "2021-07-12",
    author: "Hector Gibbons",
    ImgDemo: [
      {
        _id: 1,
        imgURL:
          "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
        imgAlt: "Hình demo đánh giá sản phẩm",
      },
      {
        _id: 2,
        imgURL:
          "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
        imgAlt: "Hình demo đánh giá sản phẩm",
      },
      {
        _id: 3,
        imgURL:
          "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
        imgAlt: "Hình demo đánh giá sản phẩm",
      },
    ],
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  },
  // More reviews...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <div>
      <div>
        <div className="bg-c-gray-5 py-3 ">
          <div className="flex items-center gap-4 bg-[white] px-4 py-3 rounded-2xl">
            <h2 className="font-medium capitalize">sản phẩm khác</h2>
            <button className="bg-primary rounded-[100px] px-3 py-1 text-[white]">
              Đánh giá
            </button>
          </div>
        </div>
        <div className="bg-[white] rounded-2xl p-4">
          <ReviewRating />

          <div className="-my-10">
            {reviews.map((review, reviewIdx) => (
              <div
                key={review.id}
                className="flex space-x-4 text-sm text-gray-500"
              >
                <div className="flex-none py-10">
                  <img
                    src={review.avatarSrc}
                    alt="avatar người dùng Poho"
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? "" : "border-t border-c-white-1",
                    "flex-1 py-10"
                  )}
                >
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-c-yellow-1"
                            : "text-c-white-1",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>
                  <div
                    className="prose prose-md text-4 text-[black] mt-1 max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />

                  <div className="flex gap-2 mt-2">
                    {review.ImgDemo.map((item) => (
                      <div key={item._id} className="w-32 h-32 overflow-hidden rounded-lg">
                        <img
                          src={item.imgURL}
                          className="object-cover object-center"
                          alt={item.imgAlt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="text-primary mx-auto mt-4 flex">Xem thêm</button>
        </div>
      </div>
    </div>
  );
}
