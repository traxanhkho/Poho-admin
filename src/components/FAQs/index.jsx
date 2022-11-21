import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Checkboxs from "../Checkboxs";

const faqs = [
  {
    question: "bán hàng trái phép",
    answer: "",
    checkboxs: [
      {
        _id: 1,
        name: "hangcam1",
        label: "sản phẩm là ma túy, thuốc lắc, chất kích thích...",
      },
      {
        _id: 2,
        name: "hangcam2",
        label: "sản phẩm là vũ khí quân dụng hoặc thô sơ",
      },
      {
        _id: 3,
        name: "hangcam3",
        label: "sản phẩm là hàng nhập lậu không giấy tờ hợp lệ",
      },
    ],
  },
  {
    question: "spam",
    answer: "",
  },
  {
    question: "thông tin sai sự thật",
    answer: "",
  },
  {
    question: "chia sẻ màn hình riêng tư",
    answer: "",
    checkboxs: [
      {
        _id: 1,
        name: "riengtu1",
        label: "chia sẻ màn hình tin nhắn riêng tư",
      },
      {
        _id: 2,
        name: "riengtu2",
        label: "màn hình lộ thông tin thẻ tín dụng",
      },
    ],
  },
  {
    question: "gian lận hoặc lừa đảo",
    answer: "",
    checkboxs: [
      {
        _id: 1,
        name: "luadao1",
        label: "sản phẩm thực tế khác hình ảnh quảng cáo.",
      },
      {
        _id: 2,
        name: "luadao2",
        label: "sản phẩm bị hư hại",
      },
    ],
  },
  {
    question: "khác",
    form: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQs() {
  const renderInputGroup = (name, label, placeholder, type) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        {type === "input" ? (
          <input
            type={name}
            name={name}
            id={name}
            className="block w-full outline-none px-3 py-2.5 rounded-xl bg-c-white-1 shadow-sm border-none sm:text-sm focus:border focus:border-solid focus:border-primary"
            placeholder={placeholder}
          />
        ) : (
          <textarea
            type={name}
            name={name}
            id={name}
            className="block w-full outline-none px-3 py-2.5 rounded-xl bg-c-white-1 shadow-sm border-none sm:text-sm focus:border focus:border-solid focus:border-primary"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl divide-y-2 divide-c-gray-4">
          <h2 className="text-center capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hãy chọn vấn đề
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-c-gray-4">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between data-[headlessui-state=open]:text-primary text-left text-gray-400">
                        <span className="font-medium text-gray-900 capitalize">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2">
                      {faq.form && (
                        <form>
                          {renderInputGroup(
                            "title",
                            "Tiêu đề:",
                            "Nhập tiêu đề của bạn",
                            "input"
                          )}
                          {renderInputGroup(
                            "content",
                            "Nội dung:",
                            "Nhập nội dung của bạn",
                            "textarea"
                          )}
                          <button
                            type="button"
                            className="flex items-center justify-center text-[white] w-full rounded-md  bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Gửi báo cáo
                          </button>
                        </form>
                      )}
                      {!faq.form && (
                        <Checkboxs list={faq.checkboxs || faq.question} />
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
