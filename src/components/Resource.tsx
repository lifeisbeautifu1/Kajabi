interface ResourceProps {
  title: string;
  paragraph: string;
}

const Resource: React.FC<ResourceProps> = ({ title, paragraph }) => {
  return (
    <div className=" flex flex-col gap-4 items-start w-full md:max-w-[375px] lg:max-w-[300px] mt-8">
      <h1 className="font-medium text-2xl">{title}</h1>
      <p>{paragraph}</p>
      <span className="leading-[1.5] cursor-pointer gap-1 border-b border-white flex items-start">
        Learn More{' '}
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </div>
  );
};

export default Resource;
