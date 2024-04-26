import WOMEN from "../assets/images/Women.png";
import IMUNITY from "../assets/images/Immunity.png";
import SKIN from "../assets/images/Skincare.png";
import HAIR from "../assets/images/Hair.png";
const Specialize = () => {
  return (
    <div className="flex">
      <div className="px-2 py-4 text-center">
        <img src={WOMEN} className="bg-[#fffcf2] rounded-lg" />
        <p className="text-[12px] font-semibold">Women Health</p>
      </div>
      <div className="px-2 py-4 text-center">
        <img src={SKIN} className="bg-[#fffcf2] rounded-lg" />
        <p className="text-[12px] font-semibold">Skin Care</p>
      </div>
      <div className="px-2 py-4 text-center">
        <img src={IMUNITY} className="bg-[#fffcf2] rounded-lg" />
        <p className="text-[12px] font-semibold">Imunity</p>
      </div>

      <div className="px-2 py-4 text-center">
        <img src={HAIR} className="bg-[#fffcf2] rounded-lg" />
        <p className="text-[12px] font-semibold">Hair Care</p>
      </div>
    </div>
  );
};
export default Specialize;
