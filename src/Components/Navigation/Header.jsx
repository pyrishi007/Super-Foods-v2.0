import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-32 border z-50">
      <div className="p-2 pl-10">
        <p className="text-6xl font-bold text-orange-500">Super Food's</p>
      </div>

      <div className="flex ">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;