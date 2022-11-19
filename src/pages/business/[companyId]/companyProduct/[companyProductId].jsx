import Reviews from "../../../../components/Reviews";
import Sidebar from "../../../../components/layouts/Sidebar";
import ProductDetailTab from "../../../../components/ProductDetail/ProductDetailTab";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../../../context/AdminContext";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const { setTopbar } = useContext(AdminContext);
  const router = useRouter();

  useEffect(() => {
    setTopbar([
      { name: "Hồ sơ doanh nghiệp", href: "/business", isChildren: false },
      {
        name: "Danh sách sản phẩm",
        href: `/business/${router.query.companyId}/companyProduct`,
        isChildren: true,
      },
      { name: "Chi tiết sản phẩm", href: "#", isChildren: true },
    ]);
  }, []);

  return (
    <Sidebar>
      <div className="bg-[white] rounded-2xl">
        <div className="p-4">
          <ProductDetailTab />
        </div>
      </div>
      <Reviews />
    </Sidebar>
  );
}
