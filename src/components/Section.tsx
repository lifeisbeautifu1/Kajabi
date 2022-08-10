interface SectionProps {
  image: string;
  title: string;
  paragraph: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  image,
  title,
  paragraph,
  reverse,
}) => {
  return (
    <div
      className={`flex gap-12 my-40 text-gray-700 ${
        reverse && 'flex-row-reverse'
      }`}
    >
      <div className="w-1/2">
        <img src={image} alt="Create" />
      </div>
      <div className="w-1/2 flex flex-col gap-4 items-start justify-center">
        <h1 className="text-5xl font-semibold mt-4">{title}</h1>
        <p className="w-4/5 text-gray-600">{paragraph}</p>
        <button className="mt-10 cursor-pointer py-2 px-8 text-blue-500 border-2 border-blue-500 rounded-[30px] transition duration-200 hover:bg-blue-500 hover:text-white">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default Section;
