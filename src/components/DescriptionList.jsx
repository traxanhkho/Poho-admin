import Badge from "./common/Badge";
import Breadcrumb from "./common/Breadcrumb";
import DescriptionLinkSocials from "./common/DescriptionLinkSocials";
import DescriptionListAvatar from "./common/DescriptionListAvatar";
import LanguageSelector from "./common/LanguageSelector";

const businessFile = [
  {
    id: 1,
    name: "Mã số thuế:",
    text: "MST653461",
  },
  {
    id: 2,
    name: "Số điện thoại:",
    text: "0333990859",
  },
  {
    id: 3,
    name: "Số di động:",
    text: "0333990859",
  },
  {
    id: 4,
    name: "Email:",
    text: "tuyen.van@worldconnect.link",
  },
  {
    id: 5,
    name: "Danh mục:",
    text: "Làm đẹp, mỹ phẩm , trang sức phụ nữ",
  },
  {
    id: 6,
    name: "Ngày thành lập:",
    text: "05-11-2022",
  },
  {
    id: 7,
    name: "Địa chỉ:",
    text: "123, An Phú Tây, Bình Chánh, Hồ Chí Minh",
  },
  {
    id: 8,
    name: "Sản phẩm:",
    text: "24",
  },
  {
    id: 9,
    name: "Thành Viên:",
    content: <DescriptionListAvatar />,
  },

  {
    id: 10,
    name: "Liên kết:",
    content: <DescriptionLinkSocials />,
  },
  {
    id: 11,
    name: "Giới thiệu:",
    text: `Sự chú trọng trong cải cách về chất lượng đem lại cho khách hàng sự cảm nhất tốt nhất với sự hài lòng tin cây, Phù hợp jack 3.5 kết nối máy tính ,điện thoại tất cả các dòng điện thoại ,trừ iphone 7 ,8 ra là không được bạn nhé. Thiết kế tông màu đen huyền ảo ,đem lại sự cảm nhận huyền bí .Mic led kết nối gần miện giúp bạn live stream hay hát thu âm đem lại hiệu quả cao trong công việc .Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....`,
  },
];

export default function DescriptionList() {
  return (
    <div className="overflow-hidden p-4 bg-[#fff] shadow sm:rounded-lg">
      <div>
        <Breadcrumb classNames="pb-4 border-b boder-solid border-c-white-1">
          <Badge active={{ isActive: true, label: "đang hoạt động" }} />
        </Breadcrumb>
        <LanguageSelector />
      </div>
      <div className=" px-4 py-5 sm:p-0">
        <dl>
          {businessFile.map((item) => {
            if (item.content) {
              return (
                <div key={item.id} className="flex flex-row gap-4 pb-4">
                  <dt className="text-[14px] w-28 leading-5 font-medium text-c-gray-3">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-[14px] flex-1 leading-5 text-gray-900 sm:col-span-2 sm:mt-0">
                    {item.content}
                  </dd>
                </div>
              );
            }
            return (
              <div key={item.id} className="flex flex-row gap-4 pb-4">
                <dt className="text-[14px] w-28 leading-5 font-medium text-c-gray-3">
                  {item.name}
                </dt>
                <dd className="mt-1 text-[14px] leading-5 flex-1 text-gray-900 sm:col-span-2 sm:mt-0">
                  {item.text}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
