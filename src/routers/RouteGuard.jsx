import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { AdminContext } from "../context/AdminContext";

export { RouteGuard };

function RouteGuard({ children }) {
  const { currentUser } = useContext(AdminContext);
  const router = useRouter();

  useEffect(() => {
   
  }, []);
}
