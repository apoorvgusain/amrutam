import { useState } from "react";
import FilterTags from "../components/FilterTags";
const Filter = () => {
  const selectOptions = [
    {
      name: "Expertise",
      options: ["Hair Care", "Skin Care", "Health", "Lifestyle"],
    },
    {
      name: "Gender",
      options: ["Male", "Female"],
    },
    {
      name: "Fees",
      options: [
        "Rs.0-Rs.500",
        "Rs.500-Rs.1000",
        "Rs.1000-Rs.1500",
        "Above Rs.2000",
      ],
    },
    {
      name: "Languages",
      options: ["English", "Hindi"],
    },

    {
      name: "All Filters",
      options: ["Filter-one", "Filter-Two"],
    },
  ];

  return (
    <>
      <div className="border-b-2 border-gray-300 px-40 py-5 flex justify-evenly">
        {selectOptions.map((data, index) => (
          <div
            key={data + index}
            className={`rounded-lg w-[14%] px-2 py-2 ${
              data.name === "All Filters" ? "bg-[#DEECDE] " : "bg-gray-100"
            }`}
          >
            <select
              className={`border-none outline-none  text-gray-600 font-medium w-[100%] ${
                data.name === "All Filters" ? "bg-[#DEECDE] " : "bg-gray-100"
              }`}
            >
              <option>{data.name}</option>
              {data.options.map((opt, index) => (
                <option key={opt + index}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <FilterTags />
    </>
  );
};
export default Filter;
