import { BiBuildingHouse } from "react-icons/bi";
const Experience = () => {
  return (
    <div className="px-4">
      <h5 className="py-3 px-1">I have been in practice for : 7+ Years</h5>
      <hr></hr>
      <div>
        <div className="flex justify-between">
          <div className="p-2 flex ">
            <BiBuildingHouse className="bg-[#F7F7FC] text-4xl p-2 rounded-lg text-blue-600" />
            <div className="px-2">
              <p className="text-sm">Midtown Medical Clinic</p>
              <p className="text-[12px] text-gray-500">Senior doctor</p>
            </div>
          </div>

          <div className="p-2 text-sm">
            <p className="text-gray-500 ">2016-PRESENT</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="p-2 flex ">
            <BiBuildingHouse className="bg-[#F7F7FC] text-4xl p-2 rounded-lg text-blue-600" />
            <div className="px-2">
              <p className="text-sm">Midtown Medical Clinic</p>
              <p className="text-[12px] text-gray-500">Senior doctor</p>
            </div>
          </div>

          <div className="p-2">
            <p className="text-gray-500  text-sm">2010-2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
