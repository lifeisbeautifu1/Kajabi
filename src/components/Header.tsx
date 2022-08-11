import HeaderImage from '../images/header.webp';

const Header = () => {
  return (
    <header className="mt-[95px] flex bg-sky-100 py-12">
      <div className="flex w-[95%] mx-auto lg:w-[85%]">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-2 md:items-start text-center md:text-left">
          <span className="text-[12px] font-medium border-2 rounded-[30px] py-1 px-3 text-red-400 border-red-400">
            Limited time
          </span>
          <h1 className="text-5xl md:text-6xl  font-semibold leading-[1.1]">
            Start your <br />
            business today. <br />
            <p className="flex">
              <span className="font-bold text-blue-600 inline-block pr-2">
                3 MONTHS
              </span>
              <span className="text-xl self-end">
                {' '}
                for <s>$597</s>
              </span>
              <span className="flex">
                <span className="text-blue-600 text-4xl self-start mt-2">
                  $
                </span>
                <span className="font-bold text-blue-600">99</span>
              </span>
            </p>
          </h1>
          <p className="font-medium text-black text-lg">
            Limited time, <span className="text-blue-600">84% discount</span>
          </p>
          <button className="bg-black text-white py-2 px-16 mt-2 rounded-[30px] cursor-pointer w-[90%] md:w-auto">
            Claim offer
          </button>
          <span className="text-sm mt-8 text-gray-500 underline cursor-pointer">
            Terms and conditions
          </span>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img
            src={HeaderImage}
            className="ml-auto w-[475px] h-full object-cover"
            alt="header"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
