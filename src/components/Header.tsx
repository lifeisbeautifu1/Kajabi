import HeaderImage from '../images/header.webp';

const Header = () => {
  return (
    <header className="mt-[95px] flex bg-sky-100 py-12">
      <div className="flex gap-8 w-[95%] mx-auto lg:w-[85%]">
        <div className="w-full lg:w-[65%] flex flex-col items-center gap-2 md:items-start text-center md:text-left">
          <span className="text-[12px] font-medium border-2 rounded-[30px] py-1 px-3 text-red-400 border-red-400">
            Limited time
          </span>
          <h1 className="text-3xl md:text-6xl  font-semibold leading-[1.1]">
            Start your <br />
            business today. <br />
            <p className="flex mt-2">
              <span className="flex items-center font-bold text-blue-600  pr-2">
                3 MONTHS
              </span>
              <span className="text-xl self-center md:self-end">
                {' '}
                for <s>$597</s>
              </span>
              <span className="flex">
                <span className="text-blue-600 text-xl md:text-4xl self-start mt-2">
                  $
                </span>
                <span className="font-bold text-blue-600 flex items-center">
                  99
                </span>
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
        <div className="w-[35%] hidden lg:block">
          <img
            src={HeaderImage}
            className="ml-auto min-w-[100px] w-full max-w-[450px] h-full object-contain"
            alt="header"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
