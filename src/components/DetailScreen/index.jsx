import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import LanguageSelector from "../common/LanguageSelector";

const profile = {
  name: "Đặng kim Anh",
  imageUrl:
    "https://cdn.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg",
  coverImageUrl:
    "https://www.fg-a.com/facebook-images/2021-beach-fun-cover.jpg",
  about: `
    <p>Bãi biển dài khoảng 7 cây số, với đường cong thoai thoải, bao quanh một trong những vịnh đẹp nhất thế giới, xung quanh có nhiều nhà hàng, khách sạn, công viên nằm cạnh nhau.</p>
    <p> Phương tiện này thích hợp cho những vị khách có điểm xuất phát cách xa thành phố, những vị khách nước ngoài. Bạn sẽ đáp xuống ở sân bay Cam Ranh, từ đó di chuyển vào thành phố sẽ mất khoảng 1 tiếng đồng hồ.</p>`,
  fields: [
    {
      _id: 1,
      title: "Mã số thuế",
      content: "MST3213213",
    },
    {
      _id: 2,
      title: "Tên công ty",
      content: "World Connect",
    },
    {
      _id: 3,
      title: "Số điện thoại",
      content: "03339908xxx",
    },
    {
      _id: 4,
      title: "Số di động",
      content: "03339908xxx",
    },

    {
      _id: 5,
      title: "Email",
      content: "tuyen.van@worldconnect.link",
    },
    {
      _id: 6,
      title: "Địa chỉ",
      content: "123, An Phú Tây, Bình Chánh, Hồ Chí Minh",
    },
    {
      _id: 7,
      title: "Danh mục",
      content: "Làm đẹp, mỹ phẩm , trang sức phụ nữ, Phụ kiện điện thoại",
    },
    {
      _id: 8,
      title: "Ngày thành lập",
      content: "05-11-2022",
    },
    {
      _id: 9,
      title: "Trang Web",
      content: "chưa có link",
    },
    {
      _id: 10,
      title: "Trang Mạng xã hội",
      content: "chưa có link",
    },
  ],
};

const pages = [{ name: "Hồ sơ cá nhân", href: "/personal", current: false }];

export default function DetailScreen() {
  const [update, setUpdate] = useState(false);
  return (
    <>
      <div className=" h-full rounded-2xl bg-[#fff] overflow-hidden">
        <div className="m-4 pb-4 border-b border-solid border-c-white-1">
          <Breadcrumb pages={pages}>
            <button
              onClick={() => setUpdate(!update)}
              className="capitalize font-medium text-[#fff] hover:opacity-80 ml-auto h-10 w-40 rounded-[30px] bg-primary"
            >
              {update ? "Lưu hồ sơ" : "chỉnh sửa"}
            </button>
          </Breadcrumb>
        </div>
        <div className="relative z-0 px-4 pt-4 pb-4 flex flex-1 overflow-hidden">
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              {/* Profile header */}
              <div>
                <div>
                  <img
                    className="h-32 w-full rounded-2xl object-cover lg:h-48"
                    src={profile.coverImageUrl}
                    alt=""
                  />
                </div>
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={profile.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                        <h1 className="capitalize text-2xl font-bold text-gray-900">
                          {profile.name}
                        </h1>
                      </div>
                      <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-primary bg-c-blue-1 px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        >
                          <EnvelopeIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Nhắn Tin</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-primary bg-c-blue-1 px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        >
                          <PhoneIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Gọi Ngay</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                    <h1 className="capitalize text-2xl font-bold text-gray-900">
                      {profile.name}
                    </h1>
                  </div>
                </div>
              </div>
              <span className="inline-block mt-8 ml-8">
                <LanguageSelector />
              </span>

              {/* Description list */}
              <div className="mx-auto mt-4 max-w-5xl px-4 sm:px-6 lg:px-8">
                <dl
                  className={`grid grid-cols-1 gap-x-4 ${
                    update ? "gap-y-4" : "gap-y-8"
                  }  sm:grid-cols-2`}
                >
                  {profile.fields.map((field) => (
                    <div key={field._id} className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        {field.title}
                      </dt>
                      {!update && (
                        <dd className="mt-1 text-sm text-gray-900">
                          {field.content}
                        </dd>
                      )}
                      {update && (
                        <div>
                          <input
                            type="text"
                            className="block w-full px-3 py-2.5 mt-2 rounded-xl bg-c-white-1 shadow-sm border-none sm:text-sm"
                            defaultValue={field.content}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Giới Thiệu
                    </dt>
                    {!update && (
                      <dd
                        className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                        dangerouslySetInnerHTML={{ __html: profile.about }}
                      />
                    )}
                    {update && (
                      <dd className="mt-1 max-w-prose space-y-5 text-sm text-gray-900">
                        <textarea
                          className="h-36 w-full block px-3 py-2.5 mt-2 rounded-xl bg-c-white-1 shadow-sm border-none sm:text-sm"
                          placeholder="Vui lòng nhập phần giới thiệu"
                        ></textarea>
                      </dd>
                    )}
                  </div>
                </dl>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
