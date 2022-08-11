const Stats = () => {
  return (
    <div className="bg-blue-600 text-white flex flex-col gap-10 items-center text-4xl lg:text-6xl font-semibold py-12">
      <h1>
        Creators use Kajabi <br />{' '}
        <span className="text-gray-800">to do and earn more</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex flex-col items-center gap-4 px-10 border-0 md:border-r-2 border-white">
          <h1>$3.9 B+</h1>
          <span className="text-sm font-normal">earned</span>
        </div>
        <div className="flex flex-col items-center gap-4 px-10 border-0 md:border-r-2 border-white">
          <h1>100,000+</h1>
          <span className="text-sm font-normal">businesses built</span>
        </div>
        <div className="flex flex-col items-center gap-4 px-10">
          <h1>300, 000+</h1>
          <span className="text-sm font-normal">products created</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
