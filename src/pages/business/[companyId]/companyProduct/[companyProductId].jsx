import { useRouter } from "next/router";
import React from "react";

function CompanyProductId(props) {
  const router = useRouter();
  const id = router.query.companyProductId;
  return <div>company Product {id} page .</div>;
}

export default CompanyProductId;
