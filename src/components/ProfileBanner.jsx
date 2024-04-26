import BG_IMG from "../assets/images/profile-banner.png";
import PROFILE_PIC from "../assets/images/profile-pic-2.png";
import BLUE_TICK from "../assets/images/bluetick.png";
import { FaStar } from "react-icons/fa";
const ProfileBanner = () => {
  return (
    <div className="rounded-lg  w-[900px]  ">
      <div className="w-full ">
        <img src={BG_IMG} className="h-20 w-full rounded-t-lg" />
      </div>
      <div className="bg-[#FFFBF2] flex rounded-b-lg ">
        <div className="w-1/3 flex py-2">
          <img
            src={PROFILE_PIC}
            className="rounded-full w-20 h-20 border-2 border-white relative top-[-25px] left-4 "
          />
          <div className="px-8 ">
            <p className="flex text-sm">
              Dr. Bruce Wills
              <img src={BLUE_TICK} className="mt-1 ml-2 w-4 h-4" />
            </p>
            <p className="text-[12px] font-semibold">Gynecologist</p>
            <p className="text-[12px] flex">
              4.2
              <span className="mt-[2px] ml-1 flex">
                <FaStar className="  text-yellow-400" />
                <FaStar className="  text-yellow-400" />
                <FaStar className="  text-yellow-400" />
                <FaStar className="  text-yellow-400" />
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/3  py-6">
          <div className="flex justify-evenly">
            <div>
              <p className="text-[12px] text-[#3A643B]">Followers</p>
              <p className="font-semibold ">850</p>
            </div>
            <div>
              <p className="text-[12px] text-[#3A643B]">Following</p>
              <p className="font-semibold ">18K</p>
            </div>
            <div>
              <p className="text-[12px] text-[#3A643B]">Posts</p>
              <p className="font-semibold ">250</p>
            </div>
          </div>
        </div>
        <div className="w-1/3  py-6 flex flex-col items-end px-4">
          <button className="w-2/3 border-[1.5px] border-[#3A643B] bg-[#3A643B]  text-white rounded-lg py-2 mb-4 text-sm">
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileBanner;
