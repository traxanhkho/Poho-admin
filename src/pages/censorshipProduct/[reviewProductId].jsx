import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/layouts/Sidebar";
import ProductDetailTab from "../../components/ProductDetail/ProductDetailTab";
import { AdminContext } from "../../context/AdminContext";

const checking = [
  {
    _id: 1,
    content: () => {},
  },
  {
    _id: 2,
    content: () => {},
  },
];

function ReviewProduct(props) {
  const {setTopbar} = useContext(AdminContext) ; 

  useEffect(() =>{
    setTopbar([{ name: "Kiểm duyệt sản phẩm", href: "/censorshipProduct", isChildren: false },
    { name: "Chi tiết sản phẩm", href: "#", isChildren: true }
  ]);
  },[])

  return (
    <Sidebar>
      <div className="bg-[white] rounded-2xl">
        <div className="p-4">
          <ProductDetailTab checking={checking} />
        </div>
      </div>
    </Sidebar>
  );
}

export default ReviewProduct;
