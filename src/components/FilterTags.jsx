import { IoIosClose } from "react-icons/io";

const FilterTags = () => {
  const tags = ["Hair Care", "Female", "Rs.0-Rs.500", "Hindi"];
  return (
    <div className="flex py-5 justify-end">
      {tags.map((tag, index) => (
        <div
          key={tag + index}
          className="w-auto rounded-xl bg-[#DEECDE] flex justify-between mx-2 pl-4 py-2"
        >
          {tag}
          <IoIosClose className="text-xl mx-2 mt-1" />
        </div>
      ))}
    </div>
  );
};

export default FilterTags;
