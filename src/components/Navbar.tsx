import Logo from '../images/logo.svg';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="cursor-pointer border-t-[5px] border-t-blue-600 fixed z-[11] top-0 left-0 right-0  bg-white border-b border-b-gray-100 shadow">
      <div className="w-full relative">
        <div className="w-[95%] lg:w-[85%] mx-auto flex justify-between items-center">
          <div>
            <img src={Logo} className="w-[135px]" alt="Kajabi" />
          </div>
          <div
            className={`absolute overflow-hidden height duration-200 top-[85px] 
            h-0 z-[100] ${isMenuOpen && 'h-auto'} left-0 right-0 bg-white`}
          >
            <ul className="text-2xl font-semibold">
              <li
                className="transition duration-200 overflow-hidden flex flex-col"
                onClick={(e) => e.currentTarget.classList.toggle('active')}
              >
                <div className="flex justify-between p-4 pr-8 hover:bg-gray-100">
                  Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </div>
                <div className="submenu flex flex-wrap">
                  <ul className="p-4 text-lg text-gray-400 font-normal flex flex-col gap-2 w-[300px]">
                    <h1 className="text-black text-2xl font-semibold mb-2">
                      Create
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Online Courses
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Coaching
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Podcasts
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Memberships
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Communities
                    </li>
                  </ul>
                  <ul className="p-4 text-xl text-gray-400 font-normal flex flex-col gap-2 w-[300px]">
                    <h1 className="text-black text-2xl font-semibold mb-2">
                      Manage
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Payment
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Contact
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Analytics
                    </li>
                  </ul>
                  <ul className="p-4 text-xl text-gray-400 font-normal flex flex-col gap-2 w-[300px]">
                    <h1 className="text-black text-2xl font-semibold mb-2">
                      Grow
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Websites
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Pages
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Emails
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Funnels
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Mobile App
                    </li>
                  </ul>
                </div>
              </li>
              <li className="p-4 transition duration-200 hover:bg-gray-100">
                Pricing
              </li>
              <li
                className="transition duration-200 overflow-hidden flex flex-col"
                onClick={(e) => e.currentTarget.classList.toggle('active')}
              >
                <div className="flex justify-between p-4 pr-8 hover:bg-gray-100">
                  Resources
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </div>
                <div className="submenu flex flex-wrap">
                  <ul className="p-4 text-lg text-gray-400 font-normal flex flex-col gap-2 w-[300px]">
                    <h1 className="text-black text-2xl font-semibold mb-2">
                      Create
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Online Courses
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Coaching
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Podcasts
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Memberships
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Communities
                    </li>
                  </ul>
                  <ul className="p-4 text-xl text-gray-400 font-normal flex flex-col gap-2 w-[300px]">
                    <h1 className="text-black text-2xl font-semibold mb-2">
                      Manage
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Payment
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Contact
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Analytics
                    </li>
                  </ul>
                </div>
              </li>
              <li className="p-4 transition duration-200 hover:bg-gray-100">
                Login
              </li>
              <li className="p-4 bg-blue-500 text-white transition duration-200 hover:bg-blue-600">
                Get 3 Months for $99
              </li>
            </ul>
          </div>
          <div className="flex lg:hidden gap-8">
            <button className="btn my-6 hover:bg-blue-600">
              Start Free Trial
            </button>
            <button
              className="text-gray-500 hover:text-gray-700 transition duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul className="hidden lg:flex items-center gap-10 text-md text-gray-500">
            <li className="flex items-center justify-center gap-1 cursor-pointer py-8 group">
              <span className="hover:font-semibold">Products</span>
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
              <div className="bg-white  pt-4 pb-10 absolute hidden group-hover:block top-[85px] left-0 right-0">
                <div className="w-[95%] mx-auto lg:w-[85%] flex">
                  <ul className="flex flex-col gap-4 text-gray-400 w-[350px]">
                    <h1 className="text-3xl text-black font-semibold mb-2">
                      Create
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Online Courses
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Coaching
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Podcasts
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Memberships
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Communities
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-4 text-gray-400 w-[350px]">
                    <h1 className="text-3xl text-black font-semibold mb-2">
                      Manage
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Payments
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Contacts
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Analytics
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-4 text-gray-400 w-[350px]">
                    <h1 className="text-3xl text-black font-semibold mb-2">
                      Grow
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Websites
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Pages
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Emails
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Funnels
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Mobile App
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="cursor-pointer py-8">Pricing</li>
            <li className="flex items-center justify-center gap-1 cursor-pointer  py-8 group">
              <span className="hover:font-semibold">Resources</span>{' '}
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
              <div className="bg-white  pt-4 pb-10 absolute hidden group-hover:block top-[85px] left-0 right-0">
                <div className="w-[95%] mx-auto lg:w-[85%] flex">
                  <ul className="flex flex-col gap-4 text-gray-400 w-[650px]">
                    <h1 className="text-3xl text-black font-semibold mb-2">
                      Knowledge
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">Blog</li>
                    <li className="cursor-pointer hover:font-semibold">
                      Kajabi University
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Help Center
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      State of the Creator Economy Report
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-4 text-gray-400 w-[350px]">
                    <h1 className="text-3xl text-black font-semibold mb-2">
                      Inspiration
                    </h1>
                    <li className="cursor-pointer hover:font-semibold">
                      Created on Kajabi
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Meet our Heroes
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Community
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Kajabi Edge Podcast
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                      Knowledge Economy Newsletter
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="cursor-pointer py-8">Login</li>
            <li className="btn hover:bg-blue-600">Get 3 Months for $99</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
