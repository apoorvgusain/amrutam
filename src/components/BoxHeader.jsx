const BoxHeader = ({ heading, follow }) => {
  return (
    <>
      <div className="bg-[#f7f9f3] flex  px-5 py-2 rounded-t-lg justify-between">
        <h4 className="font-semibold">{heading}</h4>
        {follow === "true" && (
          <button className="border-[1px] border-black rounded-lg px-4 bg-white text-gray-600 font-semibold ">
            Follow <span className="text-xl">+</span>{" "}
          </button>
        )}
      </div>
    </>
  );
};
export default BoxHeader;
