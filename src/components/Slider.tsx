import Anthony from '../images/slider_4.png';

const Slider = () => {
  return (
    <div className="mb-12">
      <div className="flex gap-12 items-center border-l border-l-black py-6 px-14">
        <img src={Anthony} className="w-[250px]" alt="Anthony" />
        <div>
          <p className="font-semibold text-xl w-[60%] text-black mb-4">
            The stat I'm most proud of in my business? 7 — the number of years
            I've been supporting my family as a coach.
          </p>
          <h1 className="text-4xl mb-1 text-blue-500 font-semibold">
            Anthony Trucks
          </h1>
          <p className="text-sm">Personal Development Coach</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
