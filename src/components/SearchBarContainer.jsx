import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
const SearchBarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Location");
  const [searchText, setSearchText] = useState(
    "eg. Doctor, specialisation, clinic name"
  );
  const options = ["Delhi", "Mumbai", "Bengaluru"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="bg-[#D3E5D380] text-center py-12  ">
      <h1 className="text-4xl py-5 capitalize font-semibold">
        Find expert Doctors for an In-clinic session here
      </h1>
      <div className="py-4 flex items-center justify-center">
        <div className="relative w-2/5">
          <div
            className="flex border-2 border-gray-400 w-52 bg-white rounded-lg mr-5 "
            style={{ float: "inline-end" }}
            onClick={toggleDropdown}
          >
            <FaLocationDot className="text-green-800 text-xl mt-4 ml-3" />
            <div className="flex items-center w-full px-1 py-3  ">
              <span className="text-gray-500 ">{selectedOption}</span>
              <FaChevronDown className="text-black text-xl ml-8" />
            </div>
          </div>
          {isOpen && (
            <ul
              className="absolute top-full right-5 z-10 w-52 border border-gray-400 bg-white rounded-lg  "
              style={{ float: "inline-end" }}
            >
              {options.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative w-3/5">
          <div className="flex border-2 border-gray-400 w-3/5 bg-white rounded-lg mr-5">
            <div className="flex items-center w-full justify-between py-3">
              <input
                type="text"
                className="text-gray-500  w-full outline-none px-4"
                placeholder={searchText}
                onChange={handleSearchText}
              />
              <FaArrowRight className="text-black text-xl mr-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBarContainer;
