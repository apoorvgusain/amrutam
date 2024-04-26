import LeftBoxContainer from "./LeftBoxContainer";
import ProfileBanner from "./ProfileBanner";
import RightBoxContainer from "./RightBoxContainer";

const ViewProfile = () => {
  return (
    <div className="flex flex-col items-center py-12">
      <ProfileBanner />
      <div className="flex  py-8 w-[900px]">
        <div className="left-container w-1/2">
          <LeftBoxContainer follow="true" heading="A Little About Me" />
          <LeftBoxContainer follow="false" heading="I Specialize In" />
          <LeftBoxContainer follow="false" heading="The Concerns I Treat" />
          <LeftBoxContainer follow="false" heading="My Work Experience" />
          <LeftBoxContainer follow="false" heading="Featured Reviews (102)" />
        </div>
        <div className="right-container w-1/2 ml-2">
          <RightBoxContainer />
        </div>
      </div>
    </div>
  );
};
export default ViewProfile;
