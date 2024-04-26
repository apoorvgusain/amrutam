import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
const AboutMe = () => {
  return (
    <div>
      <div className="text-[14px] px-5 py-2">
        <p className="text-gray-400 font-semibold py-2">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the
        </p>
        <p className="flex my-3">
          <hr className="w-3/4" />
          <span className="mt-[-15px] underline w-1/4 font-semibold">
            Read More
          </span>
        </p>
        <div className="flex">
          <p className="">Language Spoken</p>
          <div className="w-auto rounded-xl bg-[#f7f7fc] text-gray-600 flex justify-between mx-2 px-3 py-2 text-[12px]">
            English
          </div>
          <div className="w-auto rounded-xl bg-[#f7f7fc] text-gray-600 flex justify-between mx-2 px-3 py-2 text-[12px]">
            Hindi
          </div>
          <div className="w-auto rounded-xl bg-[#f7f7fc] text-gray-600 flex justify-between mx-2 px-3 py-2 text-[12px]">
            Telugu
          </div>
        </div>
        <div className="flex py-4">
          <FiFacebook className="rounded-full bg-[#f7f7fc] border-[1px] border-gray-200 p-1  text-3xl text-[#3A643B] mr-3" />
          <FaInstagram className="rounded-full bg-[#f7f7fc] border-[1px] border-gray-200 p-1  text-3xl text-[#3A643B] mr-3" />
          <SlSocialYoutube className="rounded-full bg-[#f7f7fc] border-[1px] border-gray-200 p-1  text-3xl text-[#3A643B] mr-3" />
          <CiTwitter className="rounded-full bg-[#f7f7fc] border-[1px] border-gray-200 p-1  text-3xl text-[#3A643B] mr-3" />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
