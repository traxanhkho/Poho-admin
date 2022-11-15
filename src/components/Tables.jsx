import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import Avatar from "./common/Avatar";
import AvatarTable from "./common/AvatarTable";
import Badge from "./common/Badge";
import Breadcrumb from "./common/Breadcrumb";
import Dropdown from "./common/Dropdown";
import Modal from "./common/Modal";
import Pagination from "./common/Pagination";
import Search from "./common/Search";

const people = [
  {
    _id: 1,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "nguyễn văn A",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 2,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "đặng Tất",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: false,
      label: "Chưa tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 3,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Phạm văn Đồng",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: false,
      label: "Chưa tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 4,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 6,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
];

export default function Tables() {
  // const router = useRouter(); 
  // const [data,setData] = useState([]); 
  // const {users , companies} = useContext(AdminContext) ; 

  // useEffect(() =>{
  //   let str = "/";
  //   for (let i = 1; i < router.asPath.length; i++) {
  //     let path = router.asPath.charAt(i);
  //     if (path === "/") break;
  //     str += path;
  //   }

  //   switch(str){
  //     case "/": {
  //       setData(companies)
  //     }
  //   }

  // },[])
  return (
    <div className="px-4 sm:p-4 bg-[#fff] rounded-2xl">
      <div className="sm:flex sm:items-center sm:h-10">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Danh Sách</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:flex-none">
          <Search />
        </div>
      </div>
      <div className="my-4 flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
              <table className="min-w-full c-table">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-c-gray-3 sm:pl-4"
                    >
                      Avatar
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold capitalize  text-c-gray-3"
                    >
                      Họ và tên
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold capitalize text-c-gray-3"
                    >
                      Số điện thoại
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold capitalize text-c-gray-3"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold capitalize text-c-gray-3"
                    >
                      Hồ sơ doanh nghiệp
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold capitalize text-c-gray-3"
                    >
                      Trạng thái
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8  text-c-gray-3"
                    >
                      <span className="sr-only">dropdown</span>
                    </th>
                  </tr>
                </thead>
                <tbody className=" bg-white">
                  {people.map((person) => (
                    <tr key={person._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-900 sm:pl-4">
                        <Avatar avtUrl={person.avatar} />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 font-medium text-sm">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                        {person.numberPhone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                        {<Badge active={person.profileBusiness} />}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                        {<Badge active={person.active} />}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                        <Dropdown userId={person._id}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
