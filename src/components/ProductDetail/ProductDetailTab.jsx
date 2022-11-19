import { useEffect, useState } from "react";
import { Menu, Tab } from "@headlessui/react";
import Link from "next/link";
import Dropdown from "../common/Dropdown";
import Avatar from "../common/Avatar";
import { useRouter } from "next/router";

const product = {
  name: "Tai Nghe Chụp Tai Gaming H3T - Tai Nghe Game Thủ",
  price: "250.000đ",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Angled view",
      src: "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Angled view",
      src: "https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },

    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>Sự chú trọng trong cải cách về chất lượng đem lại cho khách hàng sự cảm nhất tốt nhất với sự hài lòng tin cây </p>
    <p>Phù hợp jack 3.5 kết nối máy tính ,điện thoại tất cả các dòng điện thoại ,trừ iphone 7 ,8 ra là không được bạn nhé </p>
    <p>Thiết kế tông màu đen huyền ảo ,đem lại sự cảm nhận huyền bí </p>
    <p>Mic led kết nối gần miện giúp bạn live stream hay hát thu âm đem lại hiệu quả cao trong công việc</p>
    <p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>
  `,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetailTab() {
  const [readMore, setReadMore] = useState(false);
  const router = useRouter();

  return (
    <div className="max-w-2xl lg:max-w-7xl ">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <div>
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-5 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 sm:h-[74px] cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none "
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only"> {image.name} </span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.src}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-primary" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <Link
            href={`/business/${router.query.companyId}`}
            className="flex px-4 py-2 items-center bg-c-white-1 rounded-2xl mt-4 hover:text-primary"
          >
            <Avatar avtUrl="https://tokyometro.vn/wp-content/uploads/2022/09/1663776770_410_200-Anh-gai-xinh-rang-khenh-de-thuong-duyen-dang.jpg" />
            <ul className="ml-2">
              <li className="flex ">
                <h4 className="font-medium">
                  Cty sản xuất thiết bị công nghệ T2T
                </h4>
                <img
                  src="/assets/images/icon/tick-poho.svg"
                  className="ml-1"
                  alt="icon stick poho"
                />
              </li>
              <li>
                <p className="text-c-gray-3">
                  123, An Phú Tây, Bình Chánh, Hồ Chí Minh
                </p>
              </li>
            </ul>
            <span className="ml-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z"
                  fill="black"
                />
              </svg>
            </span>
          </Link>
        </div>
        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <div className="relative ">
            <h1 className="text-3xl mr-[100px] font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <ul className="absolute top-0 right-0 flex items-center gap-2">
              <li>
                <img
                  src="/assets/images/icon/Heart.svg"
                  alt="icon trái tim - Poho"
                />
              </li>
              <li>
                <img
                  src="/assets/images/icon/qr-code.svg"
                  alt="icon qr code - Poho"
                />
              </li>
              <li>
                <Dropdown>
                  <Menu.Items className="absolute menu-item top-full right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl overflow-hidden bg-[#fff] border border-c-gray-5 shadow-lg  focus:outline-none">
                    <div className="p-2">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={`/business/1`}
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Sao chép đường link
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={`/business/1/companyProduct`}
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Báo cáo sản phẩm
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Dropdown>
              </li>
            </ul>
          </div>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>

            <p className="text-3xl text-[24px] font-bold tracking-tight text-gray-900 inline-flex gap-4">
              <span>{product.price}</span>
              <span className="text-[16px] text-c-gray-4 font-normal  line-through">
                350.000đ
              </span>
            </p>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <ul className="list-none">
              <li className="flex">
                <p className="w-20 text-c-gray-3">Số lượng:</p>
                <span>175</span>
              </li>
              <li className="flex">
                <p className="w-20 text-c-gray-3">Trạng thái: </p>
                <span>Sẵn có</span>
              </li>
              <li className="flex">
                <p className="w-20 text-c-gray-3">Đơn vị:</p>
                <span>Cái</span>
              </li>
            </ul>
          </div>
          {/* add to bag */}
          <div className="flex gap-3 my-4">
            <button className="capitalize font-normal text-primary hover:opacity-80 h-10 w-40 rounded-[30px] bg-c-blue-1">
              Nhắn Tin
            </button>
            <button className="capitalize font-normal text-[#fff] hover:opacity-80 h-10 w-40 rounded-[30px] bg-primary">
              thêm giỏ hàng
            </button>
          </div>

          {/* description */}
          <div className="mt-6 flex gap-2">
            <div>
              <h4 className="w-20 text-c-gray-3">Mô tả :</h4>
            </div>
            <div>
              <div
                className="space-y-3 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <div
                className={`space-y-3 text-base text-gray-700 ${
                  readMore ? "" : "hidden"
                }`}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
          <button
            className="text-primary cursor-pointer flex mx-auto pt-4 hover:opacity-70"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Thu nhỏ" : "Xem thêm"}
          </button>
        </div>
      </div>
    </div>
  );
}
