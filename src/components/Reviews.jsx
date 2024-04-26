import { FaStar } from "react-icons/fa";
import PROFILE from "../assets/images/review.png";
const Reviews = () => {
  return (
    <div>
      <div className="  bg-gray-100 p-4 my-6 rounded-lg mx-4">
        <div className="flex justify-between">
          <div className="flex">
            <img src={PROFILE} />
            <div className="px-2">
              <p className=" font-semibold">Alicent Hightower</p>
              <p className="text-[12px] font-semibold text-gray-600">
                Consulted for Skin care
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm">20 January 2023</p>
          </div>
        </div>

        <div>
          <div className="flex mt-1 ml-1">
            <FaStar className=" text-yellow-400" />
            <FaStar className=" text-yellow-400" />
            <FaStar className=" text-yellow-400" />
            <FaStar className=" text-yellow-400" />
          </div>
          <p className="text-[14px] mt-1 ml-1">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>
      </div>
      <div className="  bg-gray-100 p-4 my-6 rounded-lg mx-4">
        <div className="flex justify-between">
          <div className="flex">
            <img src={PROFILE} />
            <div className="px-2">
              <p className=" font-semibold">Alicent Hightower</p>
              <p className="text-[12px] font-semibold text-gray-600">
                Consulted for Skin care
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm">20 January 2023</p>
          </div>
        </div>

        <div>
          <div className="flex mt-1 ml-1">
            <FaStar className=" text-yellow-400" />
            <FaStar className=" text-yellow-400" />
            <FaStar className=" text-yellow-400" />
            <FaStar className=" text-yellow-400" />
          </div>
          <p className="text-[14px] mt-1 ml-1">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
