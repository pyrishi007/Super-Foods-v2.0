import Navigation from "./Navigation";

const Header = () => {
  return (
 <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 p-5 ">

  <div className="flex justify-between items-center h-20 px-8">


    <div className=" font p-2 pl-4">
      <p className="text-6xl lg:text-5xl font-bold tracking-wide">
        <span className="bg-amber-500 font-bold bg-clip-text text-transparent text-6xl">
          Super Food's
        </span>
      </p>
    </div>

    {/* NAV */}
    <div className="flex items-center gap-6">
      <Navigation />
    </div>

  </div>
</div>

  );
};

export default Header;