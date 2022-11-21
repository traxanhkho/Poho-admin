import { useState, useEffect } from "react";
import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  getDaysInMonth,
  getDay,
} from "date-fns";

// type DatepickerType = "date" | "month" | "year";

export default function DatePicker({ right = false }) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [dayCount, setDayCount] = useState([]);
  const [blankDays, setBlankDays] = useState([]);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [type, setType] = useState("date");

  const decrement = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => subYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const increment = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => addMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => addYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const isToday = (date) =>
    isEqual(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date),
      selectedDate
    );

  const setDateValue = (date) => () => {
    setSelectedDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        datepickerHeaderDate.getMonth(),
        date
      )
    );
    setShowDatepicker(false);
  };

  const getDayCount = (date) => {
    let daysInMonth = getDaysInMonth(date);

    // find where to start calendar day of week
    let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  };

  const isSelectedMonth = (month) =>
    isEqual(
      new Date(selectedDate.getFullYear(), month, selectedDate.getDate()),
      selectedDate
    );

  const setMonthValue = (month) => () => {
    setDatepickerHeaderDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        month,
        datepickerHeaderDate.getDate()
      )
    );
    setType("date");
  };

  const toggleDatepicker = () => setShowDatepicker((prev) => !prev);

  const showMonthPicker = () => setType("month");

  const showYearPicker = () => setType("date");

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);

  return (
    <div className="max-h-10">
      <div className="relative z-[1]">
        <input type="hidden" name="date" />
        <input
          type="text"
          readOnly
          className="cursor-pointer bg-c-white-1 border-none w-32 leading-[20px] rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-[14px]  font-medium"
          placeholder="Select date"
          value={format(selectedDate, "yyyy-MM-dd")}
          onClick={toggleDatepicker}
        />
        <div
          className="cursor-pointer absolute top-[6px] right-[10px]"
          onClick={toggleDatepicker}
        >
          <img
            src="/assets/images/icon/Calendar.svg"
            alt="icon calendar - Poho"
          />
        </div>
        {showDatepicker && (
          <div
            className={`bg-c-blue-1 mt-[40px] rounded-lg shadow-md p-4 absolute top-0 ${
              right ? "right-0" : "left-0"
            }`}
            style={{ width: "17rem" }}
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <button
                  type="button"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={decrement}
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
              {type === "date" && (
                <div
                  onClick={showMonthPicker}
                  className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                >
                  <p className="text-center text-primary">
                    {format(datepickerHeaderDate, "MMMM")}
                  </p>
                </div>
              )}
              <div
                onClick={showYearPicker}
                className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
              >
                <p className="text-center text-primary">
                  {format(datepickerHeaderDate, "yyyy")}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={increment}
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {type === "date" && (
              <>
                <div className="flex flex-wrap mb-3 -mx-1">
                  {DAYS.map((day, i) => (
                    <div key={i} style={{ width: "14.26%" }} className="px-1">
                      <div className="text-gray-800 font-medium text-center text-xs">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap -mx-1">
                  {blankDays.map((_, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="text-center border p-1 border-none text-sm"
                    ></div>
                  ))}
                  {dayCount.map((d, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="px-1 mb-1"
                    >
                      <div
                        onClick={setDateValue(d)}
                        className={`cursor-pointer text-center text-sm hover:bg-primary hover:text-[white] rounded-full leading-loose transition ease-in-out duration-100 ${
                          isToday(d)
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-blue-200"
                        }`}
                      >
                        {d}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {type === "month" && (
              <div className="flex flex-wrap -mx-1">
                {Array(12)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      onClick={setMonthValue(i)}
                      style={{ width: "25%" }}
                    >
                      <div
                        className={`cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-gray-200 ${
                          isSelectedMonth(i)
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-blue-200"
                        }`}
                      >
                        {format(
                          new Date(
                            datepickerHeaderDate.getFullYear(),
                            i,
                            datepickerHeaderDate.getDate()
                          ),
                          "MMM"
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}{" "}
          </div>
        )}
      </div>
    </div>
  );
}
