const RestaurantLoading = ({prop}) => {
    console.log(prop.name);
    
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-8">
                                        
      <div className="relative">
        <div className="w-32 h-32 border-4 border-amber-300 rounded-full"></div>
        <div className="w-32 h-32 border-4 border-amber-500 border-t-transparent rounded-full animate-spin absolute top-0"></div>
      </div>

      <div className=" flex gap-3">

      <p className="text-4xl font-semibold text-gray-700">
        Please Wait while we load your
      </p>
      <p className="text-4xl font-semibold text-amber-500 animate-pulse">
        Menu
      </p>
      </div>


      <p className="text-gray-500 text-md">
        Preparing restaurant for you...
      </p>


      <div className="flex gap-2 mt-3">
        <span className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:.1s]"></span>
        <span className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:.2s]"></span>
        <span className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:.4s]"></span>
      </div>
    </div>
  );
};

export default RestaurantLoading;
