import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const positions = [
  {
    id: 1,
    avatar: {
      url: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
      alt: "avatar người dùng Poho",
    },
    title: "Shop hoa Lưu Anh",
    department:
      "đăng bài viết với tiêu đề : 'bán hàng online là một nghệ thuật'",
    closeDate: "2020-01-07",
    closeDateFull: "1 giờ trước",
  },
  {
    id: 2,
    avatar: {
      url: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
      alt: "avatar người dùng Poho",
    },

    title: "MR.coffee",
    department: "yêu cầu xét duyệt bài viết.",
    closeDate: "2020-01-07",
    closeDateFull: "3 ngày trước",
  },
  {
    id: 3,
    avatar: {
      url: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
      alt: "avatar người dùng Poho",
    },
    title: "Đan Phượng",
    department: "đặt hàng của shop hoa Lưu Ly.",
    closeDate: "2020-01-14",
    closeDateFull: "3 tuần trước",
  },
  {
    id: 4,
    avatar: {
      url: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
      alt: "avatar người dùng Poho",
    },
    title: "Đan Phượng",
    department: "đặt hàng của shop hoa Lưu Ly.",
    closeDate: "2020-01-14",
    closeDateFull: "3 tuần trước",
  },
  {
    id: 5,
    avatar: {
      url: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
      alt: "avatar người dùng Poho",
    },
    title: "Đan Phượng",
    department: "đặt hàng của shop hoa Lưu Ly.",
    closeDate: "2020-01-14",
    closeDateFull: "3 tuần trước",
  },
];

export default function StackedLists() {
  return (
    <div className="overflow-hidden">
      <ul role="list" className="my-4">
        {positions.map((position) => (
          <li key={position.id}>
            <Link href="#notificationDetail" className="block rounded-2xl hover:bg-c-white-1">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex items-center gap-4">
                      <span className="relative inline-block">
                        <img
                          src={position.avatar.url}
                          className="h-16 w-16 rounded-full"
                          alt={position.avatar.alt}
                        />
                        <span className="absolute bottom-[4px] right-[2px] block h-4 w-4 rounded-full bg-c-green-1 ring-2 ring-[white]" />
                      </span>
                      <span>
                        <div className="flex text-sm">
                          <p className="truncate font-medium text-indigo-600">
                            {position.title}
                          </p>
                          <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                            Đã {position.department}
                          </p>
                        </div>
                        <div className="mt-2 flex">
                          <div className="flex items-center text-sm text-gray-500">
                            {/* <CalendarIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-primary"
                              aria-hidden="true"
                            /> */}
                            <p className="text-primary font-medium">
                              <time dateTime={position.closeDate}>
                                {position.closeDateFull}
                              </time>
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <button className="flex mx-auto  text-primary capitalize hover:opacity-70 ">
        xem thêm
      </button>
    </div>
  );
}
