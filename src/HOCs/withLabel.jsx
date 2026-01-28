 const withLabel = (RestroCard) => {
  return (props) => {
    return (
      <>
        <div className=" relative">
          <label className=" absolute z-10 top-2 left-8 border-gray-950 bg-gray-900 px-6 text-md py-1  font-mono text-gray-200 rounded-[6px_6px_6px_0px] space-x-4 opacity-90">
            Promoted
          </label>
          <RestroCard {...props} />
        </div>
      </>
    );
  };
};
export default withLabel
