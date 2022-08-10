import Logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="cursor-pointer border-t-[5px] border-t-blue-600 fixed top-0 left-0 right-0 p-6 bg-white border-b border-b-gray-100 shadow">
      <div className="w-[85%] m-auto flex justify-between items-center">
        <div>
          <img src={Logo} className="w-[135px]" alt="Kajabi" />
        </div>
        <ul className="flex items-center gap-10 text-md text-gray-500">
          <li className="flex items-center justify-center gap-1 cursor-pointer hover:font-semibold">
            Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li className="cursor-pointer">Pricing</li>
          <li className="flex items-center justify-center gap-1 cursor-pointer hover:font-semibold">
            Resources{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li className="cursor-pointer">Login</li>
          <li className="btn hover:bg-blue-600">Get 3 Months for $99</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
