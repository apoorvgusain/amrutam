import { SlCalender } from "react-icons/sl";
import { IoIosArrowDropleft } from "react-icons/io";
import TICK from "../assets/images/bluetick.png";
import { IoIosArrowDropright } from "react-icons/io";
const RightBoxContainer = () => {
  return (
    <div>
      <div className="border-2 border-gray-200 rounded-lg mb-5">
        <div className="flex justify-between border-2 border-gray-200 rounded-lg my-4 mx-2 px-4 py-1">
          <p className="text-gray-600">Appointement Fee</p>
          <p className="text-[#3a643b] font-semibold">₹699.00</p>
        </div>
        <div>
          <div className="flex px-4">
            <p className="w-1/2 font-semibold">Select your mode of session</p>
            <hr className="w-1/2 mt-3 " />
          </div>
        </div>
        <div className="flex justify-center py-5">
          <div className="text-center border-[1px] border-gray-200 rounded-lg px-5 ml-4 py-1">
            <p className="font-semibold text-sm ">In-Clinic</p>
            <p className="text-sm">45mins</p>
          </div>
          <div className="text-center  border-[1px] border-gray-200 rounded-lg px-5 ml-4  py-1 bg-[#94cc959e]">
            <p className="font-semibold text-sm flex">
              Video <img src={TICK} className="w-4 h-4 mt-1 ml-1" />
            </p>
            <p className="text-sm">45mins</p>
          </div>
          <div className="text-center   border-[1px] border-gray-200 rounded-lg px-5 ml-4 py-1">
            <p className="font-semibold text-sm">Chat</p>
            <p className="text-sm">10mins</p>
          </div>
        </div>
        <div>
          <div className="flex px-4">
            <p className="w-1/2 font-semibold">Pick a time slot</p>
            <hr className="w-1/2 mt-3 " />
            <SlCalender className="border-[1px] border-gray-500 rounded-full px-2 text-3xl" />
          </div>
        </div>
        <div className="flex justify-center py-5 px-3">
          <div className="flex border-[1px] py-3 px-1 rounded-lg">
            <IoIosArrowDropleft className="mt-4 mr-1" />
            <div className="text-center border-[1px] border-gray-200 rounded-lg px-5  py-1 bg-[#94cc959e]">
              <p className="font-semibold text-sm ">Mon, 10 Oct</p>
              <p className="text-sm">10 slots</p>
            </div>
            <div className="text-center  border-[1px] border-gray-200 rounded-lg px-5 ml-2  py-1">
              <p className="font-semibold text-sm">Tue, 11 Oct</p>
              <p className="font-semibold text-sm text-[#D5512E]">02 slots </p>
            </div>
            <div className="text-center   border-[1px] border-gray-200 rounded-lg px-5 ml-2 py-1">
              <p className="font-semibold text-sm">Wed, 12 Oct</p>
              <p className="font-semibold text-sm text-yellow-200">10mins</p>
            </div>
            <IoIosArrowDropright className="mt-4 ml-1" />
          </div>
        </div>
        <div className="px-4 mt-2">
          <h5 className="font-semibold">Morning</h5>
          <div className="flex flex-wrap">
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-4 m-1">
              09:00AM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-4 m-1">
              09:30AM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-4 m-1">
              10:00AM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-4 m-1">
              10:15AM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-4 m-1">
              10:45AM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-4 m-1 text-white  bg-[#3A643B] ">
              11:00AM
            </div>
          </div>
        </div>
        <div className="px-4 my-4">
          <h5 className="font-semibold">English</h5>
          <div className="flex flex-wrap">
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-4 m-1">
              04:00 PM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-3 m-1">
              04:15 PM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-3 m-1">
              04:30 PM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-3 m-1">
              10:15AM
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg text-sm py-2 px-3 m-1">
              04:45 PM
            </div>
          </div>
        </div>
        <div className="text-center px-5">
          <button className="w-full border-[1.5px] border-[#3A643B] bg-[#3A643B]  text-white rounded-lg py-2 mb-4 text-sm">
            Make an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBoxContainer;
