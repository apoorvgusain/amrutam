import PROFILE_PIC from "../assets/images/profile-pic.png";
import { FaStar } from "react-icons/fa";
import { BiCapsule } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
const Profile = () => {
  const profileData = [
    {
      doctorName: "Dr. Prerna Narang",
      expertise: "Male-Female Infertility",
      experience: " 7 years of Experience",
      lang: " Speaks: English, Hindi, Marathi",
    },
    {
      doctorName: "Dr. Prerna Narang",
      expertise: "Male-Female Infertility",
      experience: " 7 years of Experience",
      lang: " Speaks: English, Hindi, Marathi",
    },
    {
      doctorName: "Dr. Prerna Narang",
      expertise: "Male-Female Infertility",
      experience: " 7 years of Experience",
      lang: " Speaks: English, Hindi, Marathi",
    },
  ];
  return (
    <div className="flex justify-center py-10">
      {profileData.map((data, index) => (
        <div
          key={data + index}
          className="border-[1.5px] border-gray rounded-lg w-80 bg-[#FFF7E2]  flex flex-col items-center shadow-lg mx-4 "
        >
          <div className="pt-4 px-5 ">
            <img src={PROFILE_PIC} className="rounded-full" />
            <span className="flex relative left-10 top-[-12px] bg-black text-white w-16 pl-3 rounded-xl">
              4.5
              <FaStar className="mt-1 ml-1 text-yellow-400" />
            </span>
          </div>
          <div className="mx-6 pb-5">
            <h2 className="text-3xl font-semibold pl-2">{data.doctorName}</h2>
            <ul className="text-sm py-2">
              <li className="flex pl-4">
                <BiCapsule className="mt-1 mr-1 text-[#3A643B]  " />
                {data.expertise}
              </li>
              <li className="flex pl-4">
                <LuGraduationCap className="mt-1 mr-1 text-[#3A643B]  " />{" "}
                {data.experience}
              </li>
              <li className="flex pl-4">
                <BiMessageDetail className="mt-1 mr-1 text-[#3A643B]  " />
                {data.lang}
              </li>
            </ul>
            <div className="flex">
              <div className="border-[1px] border-[#3A643B] mr-2 rounded-lg px-1 py-1 flex flex-col items-center  ">
                <p className="text-sm">Video Consultation</p>
                <span className="text-center text-[12px] font-semibold">
                  ₹800
                </span>
              </div>
              <div className="border-[1px] border-[#3A643B]  rounded-lg px-1 py-1 flex flex-col items-center ">
                <p className="text-sm">Chat Consultation</p>
                <p className="text-center text-sm">Free</p>
              </div>
            </div>
            <div className="block">
              <Link to="/view-profile">
                <button className="w-full border-[1.5px] border-[#3A643B] text-[#3A643B]  bg-white rounded-lg py-1 my-2 font-semibold">
                  View Profile
                </button>
              </Link>
              <button className="w-full border-[1.5px] border-[#3A643B] bg-[#3A643B]  text-white rounded-lg py-2 mb-4">
                Book a consultation
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Profile;
