import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-20">
      <div className="w-[95%] lg:w-[85%] mx-auto flex flex-col items-center lg:flex-row itmes-center justify-between gap-4">
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl">
            <FaFacebook />
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl">
            <FaTwitter />
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl">
            <FaInstagram />
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl">
            <FaYoutube />
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl">
            <FaLinkedin />
          </li>
        </ul>
        <p className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer">
          Policies, Terms of Service, and Income Disclosure
        </p>
      </div>
    </div>
  );
};

export default Footer;
