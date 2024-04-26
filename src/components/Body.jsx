import Filter from "./Filter";
import ProfileListing from "./ProfileListing";
import SearchBarContainer from "./SearchBarContainer";

const Body = () => {
  return (
    <div className="w-full">
      <SearchBarContainer />
      <Filter />
      <ProfileListing></ProfileListing>
    </div>
  );
};
export default Body;
